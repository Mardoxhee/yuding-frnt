import TextField from "@mui/material/TextField";
// import NumberPicker from "./../../src/components/shared/NumberPicker";
import NumberPicker from "./../shared/NumberPicker";
import ResponsiveTimePickers from "./../shared/TimePick";
import MultipleSelect from "./../shared/MultiSelect";
import LoadingButton from "./../shared/LoadingButton";
import { useForm } from "react-hook-form";

// import authHeader from "./../../services/auth-header";
import { useState, useEffect } from "react";

const Form = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const url = `https://yuding.herokuapp.com/category`;
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json.categories);
    } catch (error) {
      error.message;
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const requestoptions = {
        method: "POST",
        body: JSON.stringify(data),
        // credentials: "include",
        // credentials: "include",
        // headers: authHeader(),
      };
      const response = await fetch(
        "https://yuding.herokuapp.com/restaurants/",
        requestoptions
      );

      const jsonData = await response.json();
      console.log(jsonData);

      if (response.status == 201) {
        Router.push({
          pathname: "http://localhost:3009",
        });
        reset();
      }
    } catch (error) {
      console.log("error :", error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <form>
      <div className="input-group">
        <TextField
          label="Nom du restaurant"
          variant="outlined"
          className="textfield"
          {...register("restaurantName", { required: true })}
        />
        <div className="textfield">
          <NumberPicker
            label="Nombre de place"
            className="textfield"
            {...register("nbrPlaces", { required: true })}
          />
        </div>
      </div>

      <div className="input-group">
        <div className="textfield">
          <div className="label-wrap">
            <label>Heure d'ouverture</label>
            <ResponsiveTimePickers
              className="textfield"
              {...register("openTime", { required: true })}
            />
          </div>
        </div>
        <div className="textfield">
          <div className="label-wrap">
            <label>Heure de fermeture</label>
            <ResponsiveTimePickers
              className="textfield"
              {...register("closeTime", { required: true })}
            />
          </div>
        </div>
      </div>
      <div className="input-group">
        <TextField
          type="input"
          label="Commune"
          variant="outlined"
          className="textfield"
          {...register("township", { required: true })}
        />
        <TextField
          type="input"
          label="Quartier"
          variant="outlined"
          className="textfield"
          {...register("quater", { required: true })}
        />
      </div>
      <div className="input-group">
        <TextField
          type="input"
          label="Avenue"
          variant="outlined"
          className="textfield"
          {...register("street", { required: true })}
        />
        <TextField
          type="number"
          label="Numéro"
          variant="outlined"
          className="textfield"
          {...register("number", { required: true })}
        />
      </div>
      <div className="input-group">
        <TextField
          type="input"
          label="Description"
          variant="outlined"
          className="textfield"
          {...register("description", { required: true })}
          multiline
          maxRows={4}
        />

        <div className="textfield">
          <MultipleSelect
            {...register("category", { required: true })}
            categories={categories}
          />
        </div>
      </div>
      <div className="input-group">
        <TextField
          type="input"
          label="pourcentage de réduction dans les prix"
          variant="outlined"
          className="textfield"
          maxRows={4}
          {...register("reduction", { required: true })}
        />
        <TextField
          type="input"
          label=" prix moyen"
          variant="outlined"
          className="textfield"
          maxRows={4}
          {...register("prixMoyen", { required: true })}
        />
      </div>
      <div className="input-group">
        {" "}
        <TextField
          type="input"
          label=" Pays"
          variant="outlined"
          className="textfield"
          maxRows={4}
          {...register("pays", { required: true })}
        />
      </div>
      <div className="input-group">
        <div className="label-wrap">
          <label>image de mise en avant(profile)</label>
          <TextField
            variant="outlined"
            className="textfield"
            type="file"
            {...register("image")}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="label-wrap">
          <label>image de couverture</label>
          <TextField
            variant="outlined"
            className="textfield"
            type="file"
            {...register("coverPicture")}
          />
        </div>
      </div>
      <div className="buttonContainer">
        <LoadingButton className="buttonConnexion" action="Créer" />
        <button type="submit" onclick={handleSubmit(onSubmit)}>
          Créer
        </button>
      </div>
    </form>
  );
};

export default Form;
