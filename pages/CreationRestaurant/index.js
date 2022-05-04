import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import FormPropsTextFields from "./../../src/components/shared/NumberPicker";
import ResponsiveTimePickers from "./../../src/components/shared/TimePick";
import Router from "next/router";
import { useState, useEffect } from "react";
import TimePicker from "./../../src/components/shared/TimePicker";
import authHeader from "./../../services/auth-header";

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
  }
  .textfield {
    width: 45%;
    margin: 1%;
    height: 50px;
    padding: 10px;
  }
`;

export default function CreationRestaurant() {
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
        headers: authHeader(),
      };
      const response = await fetch(
        // "https://yuding.herokuapp.com/restaurants",
        "http://127.0.0.1:3000/restaurants",
        requestoptions
      );

      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log("error :", error.message);
    }
  };

  return (
    <COntainer>
      <h2>Créez votre restaurant sur la plateforme Yuding</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="nom du restaurant"
          className="textfield"
          {...register("restaurantName", { required: true })}
        />
        <input
          placeholder="nombre de place"
          className="textfield"
          {...register("nbrPlaces", { required: true })}
        />
        <input
          placeholder="heure d'ouverture"
          className="textfield"
          {...register("openTime", { required: true })}
        />
        <input
          placeholder="heure de fermeture"
          className="textfield"
          {...register("closeTime", { required: true })}
        />
        <input
          placeholder="commune"
          className="textfield"
          {...register("township", { required: true })}
        />
        <input
          placeholder="quartier"
          className="textfield"
          {...register("quater", { required: true })}
        />
        <input
          placeholder="avenue"
          className="textfield"
          {...register("street", { required: true })}
        />
        <input
          placeholder="référence"
          className="textfield"
          {...register("reference", { required: true })}
        />
        <input
          placeholder="numéro"
          className="textfield"
          {...register("number", { required: true })}
        />
        <input
          placeholder="description"
          className="textfield"
          {...register("description", { required: true })}
        />
        <input
          placeholder="catégorie"
          className="textfield"
          {...register("category", { required: true })}
        />
        <input
          placeholder="reduction"
          className="textfield"
          {...register("reduction", { required: true })}
        />
        <input
          placeholder="prix moyen"
          className="textfield"
          {...register("prixMoyen", { required: true })}
        />
        <input
          placeholder="menu description"
          className="textfield"
          {...register("menuDescription", { required: true })}
        />
        <input
          placeholder="pays"
          className="textfield"
          {...register("pays", { required: true })}
        />
        <input
          placeholder="image"
          className="textfield"
          {...register("image")}
        />
        <input
          placeholder="couverture"
          className="textfield"
          {...register("coverPicture")}
        />

        <button type="submit">Créer le restaurant</button>
      </form>
    </COntainer>
  );
}
