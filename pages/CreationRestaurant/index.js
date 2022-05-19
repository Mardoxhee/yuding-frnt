import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import FormPropsTextFields from "./../../src/components/shared/NumberPicker";
import ResponsiveTimePickers from "./../../src/components/shared/TimePick";
import Router from "next/router";
import { useState, useEffect } from "react";
import TimePicker from "./../../src/components/shared/TimePicker";
import authHeader from "./../../services/auth-header";
import CustomizedSnackbars from "./../../src/components/shared/CustomizedSnackbars";
import { useRouter } from "next/router";

const COntainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  form {
    margin: 1rem;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    button {
      width: 100%;
      padding: 1rem;
      background-color: none;
      margin: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .textfieldNative {
    height: 3.5rem;
    padding: 1rem;
    border-radius: 2px;
    border: 1px rgb(133, 133, 133) solid;
    &:focus {
      outline: 2px solid #f7941d;
      border: none;
    }
  }
  .textfieldIpt {
    width: 45%;
    margin: 1%;
    height: 3.5rem;
    padding: 10px;
  }
  .textfield {
    width: 45%;
    margin: 1%;
  }
  .none {
    display: none;
  }
  .radio {
    width: 100%;
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function CreationRestaurant() {
  const [value, setValue] = useState(Date.now());
  const [valueClose, setValueClose] = useState(Date.now());
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState("");
  const [urlState, setUrl] = useState("");
  const [getOpened, setGgetOpened] = useState(false);
  const [getOpenedError, setGgetOpenedError] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const router = useRouter();

  const getuserInfo = async () => {
    const user = localStorage.getItem("user");
    setUserInfo(user);
    console.log("user info", userInfo);
    return user;
  };

  const getClosed = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setGgetOpened(false);
  };
  const getClosedError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setGgetOpenedError(false);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const cloudName = "yudingplatform";
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "yuding");
    data.append("cloud_name", "yudingplatform");
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "post",
        body: data,
        config,
      }
    );
    const gotData = await response.json();
    console.log({ response });
    setUrl(gotData.url);
    console.log({ urlState });
  };

  const getCategories = async () => {
    try {
      const url = `https://yuding.herokuapp.com/category`;
      const response = await fetch(url);
      const json = await response.json();
      console.log("resonse", json);
      setCategories(json.categories);
    } catch (error) {
      error.message;
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    console.log({ value });
  };

  const handleTime = (newValue) => {
    setValue(newValue);
    console.log({ value });
  };
  const handleTimeClose = (newValueClose) => {
    setValueClose(newValueClose);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getCategories();
    getuserInfo();
  }, []);

  const onSubmit = async (data) => {
    try {
      await uploadImage();
      data.coverPicture = urlState;
      console.log(data);
      const requestoptions = {
        method: "POST",
        body: JSON.stringify(data),
        headers: authHeader(),
      };
      const response = await fetch(
        "https://yuding.herokuapp.com/restaurants",
        // "http://127.0.0.1:3000/restaurants",
        requestoptions
      );
      if (response.status === 201) {
        setGgetOpened(true);
        reset();
        Router.push({
          pathname: "http://localhost:3009/#/restaurants",
          query: { userInfo },
        });
      }
      if (response.status !== 201) {
        setGgetOpenedError(true);
      }

      const jsonData = await response.json();
      console.log("json data", jsonData);
    } catch (error) {
      console.log("error :", error.message);
    }
  };

  return (
    <COntainer>
      <h2>Créez votre restaurant sur la plateforme Yuding</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="input"
          label="nom du restaurant"
          {...register("restaurantName", { required: true })}
          className="textfield"
        />
        <input
          type="number"
          placeholder="nombre de place"
          {...register("nbrPlaces", { required: true })}
          className="textfieldNative textfield"
        />
        <div className="textfield">
          <input
            value={value}
            className="none"
            {...register("openTime", { required: true })}
          />
          <input
            className="none"
            value={valueClose}
            {...register("closeTime", { required: true })}
          />
          <TimePicker
            className="textfield"
            value={value}
            onChange={handleTime}
            label="Heure d'ouverture"
          />
        </div>
        <div className="textfield">
          <TimePicker
            className="textfield"
            value={valueClose}
            onChange={handleTimeClose}
            label="Heure de fermeture"
          />
        </div>
        <TextField
          type="input"
          label="commune"
          className="textfield"
          {...register("township", { required: true })}
        />
        <TextField
          type="input"
          label="quartier"
          className="textfield"
          {...register("quater", { required: true })}
        />
        <TextField
          label="avenue"
          className="textfield"
          {...register("street", { required: true })}
        />
        <TextField
          type="number"
          label="numéro"
          className="textfield"
          {...register("number", { required: true })}
        />
        <TextField
          type="input"
          label="description"
          className="textfield"
          {...register("description", { required: true })}
        />
        <select
          label="Sélectionnez une catégorie"
          onChange={handleChange}
          className="textfieldIpt"
          {...register("category", { required: true })}
        >
          {categories.map((category) => {
            return (
              <option value={`${category._id}`} key={category._id}>
                {category.categoryName}
              </option>
            );
          })}
        </select>
        <TextField
          type="number"
          label="reduction (évaluer la valeur en %)"
          className="textfield"
          {...register("reduction", { required: true })}
        />
        <TextField
          label="prix minimal"
          className="textfield"
          {...register("prixMoyen", { required: true })}
        />
        <TextField
          type="input"
          label="En quelques lignes essayez de décrire votre menu"
          className="textfield"
          {...register("menuDescription", { required: true })}
        />
        <TextField
          {...register("pays", { required: true })}
          type="input"
          label="pays"
          className="textfield"
        />
        <input
          onChange={handleFile}
          id="coverPicture"
          name="coverPicture"
          type="file"
          fileName={urlState}
        />
        <div className="radio">
          <p>
            J'ai lu les termes et conditions de la plateforme yuding et
            j'approuve
          </p>
        </div>
        <CustomizedSnackbars
          getOpened={getOpened}
          getClosed={getClosed}
          severity="success"
          message="Restaurant créé avec succès !"
        />
        <CustomizedSnackbars
          getOpened={getOpenedError}
          getClosed={getClosedError}
          severity="error"
          message="Veuillez reessayer, le restaurant n'a malheureusement pas été créé !"
        />
        <button type="submit">Créer le restaurant</button>
      </form>
    </COntainer>
  );
}
