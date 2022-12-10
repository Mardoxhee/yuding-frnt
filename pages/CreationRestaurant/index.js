import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import Router from "next/router";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import TimePicker from "./../../src/components/shared/TimePicker";
import authHeader from "./../../services/auth-header";
import CustomizedSnackbars from "./../../src/components/shared/CustomizedSnackbars";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

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
  .displayed {
    display: block;
    margin-left: 20px;
  }
  .unDisplayed {
    display: none;
  }
  .btnSubmit {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function CreationRestaurant() {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [value, setValue] = useState(new Date());
  const [valueClose, setValueClose] = useState(new Date());
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState("");
  const [urlState, setUrl] = useState("");
  const [getOpened, setGgetOpened] = useState(false);
  const [getOpenedError, setGgetOpenedError] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const router = useRouter();

  const handleDisable = () => {
    setBtnDisabled(true);
  };

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
    setUrl(gotData.url);
  };

  const getCategories = async () => {
    try {
      // const url = `https://yuding.herokuapp.com/category`;
      const url = `https://yuding-platform.onrender.com/category`;
      const response = await fetch(url);
      const json = await response.json();
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
    let selectedTime = new Date(newValue);
    setValue(selectedTime.getTime());
  };
  const handleTimeClose = (newValueClose) => {
    let selectedTime = new Date(newValueClose);
    setValueClose(selectedTime.getTime());
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
  }, [value, valueClose]);

  const onSubmit = async (data) => {
    try {
      handleDisable();
      const cloudName = "yudingplatform";
      const cloudinaryData = new FormData();
      cloudinaryData.append("file", file);
      cloudinaryData.append("upload_preset", "yuding");
      cloudinaryData.append("cloud_name", "yudingplatform");
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      const resp = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "post",
          body: cloudinaryData,
          config,
        }
      );
      const gotData = await resp.json();

      data.coverPicture = gotData.url;
      console.log({ data });
      data = { ...data, openTime: value };
      data = { ...data, closeTime: valueClose };
      console.log("data to send to backend", data);
      const requestoptions = {
        method: "POST",
        body: JSON.stringify(data),
        headers: authHeader(),
      };
      const response = await fetch(
        "https://yuding-platform.onrender.com/restaurants",
        requestoptions
      );
      const jsonData = await response.json();

      console.log("restaurantId", restaurantId);
      if (response.status === 201) {
        setGgetOpened(true);
        setRestaurantId(jsonData.newRestaurant._id);
        reset();
        Router.push({
          pathname: "https://yuding-manager.vercel.app/",
          // pathname: "http://localhost:8082/",
          query: { userInfo },
        });
      }
      if (response.status !== 201) {
        setGgetOpenedError(true);
      }
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
          {/* <input value={value} className="none" /> */}

          {/* <input
            className="none"
            value={valueClose}
              {...register("openTime", { required: true })}
          /> */}
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
            // {...register("closeTime", { required: true })}
          />
        </div>
        <TextField
          type="input"
          label="commune"
          className="textfield"
          {...register("adress[0].township", { required: true })}
        />
        <TextField
          type="input"
          label="quartier"
          className="textfield"
          {...register("adress[0].quater", { required: true })}
        />
        <TextField
          label="avenue"
          className="textfield"
          {...register("adress[0].street", { required: true })}
        />
        <TextField
          type="number"
          label="numéro"
          className="textfield"
          {...register("adress[0].number", { required: true })}
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
        <button
          type="submit"
          disabled={btnDisabled ? true : false}
          className="btnSubmit"
        >
          Créer le restaurant
          <CircularProgress
            className={btnDisabled ? "displayed" : "unDisplayed"}
          />
          <Icon />
        </button>
      </form>
    </COntainer>
  );
}
