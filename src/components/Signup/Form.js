import styled from "styled-components";
import Image from "next/image";
import { Icon } from "@iconify/react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import Router from "next/router";

const Contenair = styled.div`
  width: 100%;
  font-family: "poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 799px) {
    flex-direction: column-reverse;
  }

  h2 {
    font-weight: 600;
    font-size: 1rem;
    width: 400px;
  }
  .formContenair {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 400px;

    .advice {
      p {
        margin-top: 1rem;
        .icone {
          font-size: 1.5rem;
          color: #ff9a62;
        }
        span {
          @media only screen and (max-width: 799px) {
            width: 390px;
          }
          margin-left: 10px;
          width: 400px;
          font-size: 0.9rem;
        }
        display: flex;
      }
    }

    form {
      .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #f7941d;
      }
      .MuiFormLabel-root.Mui-focused {
        color: #212121 !important;
      }
      margin-top: 1rem;
      width: 100%;
      @media only screen and (max-width: 799px) {
        padding-bottom: 2rem;
      }

      div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 8px;
        .textfield {
          width: 48%;
        }
      }
      .textfield-email {
        width: 100%;
      }
      .passwordFieldsContenair {
        display: flex;
        .textfield-pass-word {
          width: 48%;
        }
      }
    }
    .checkboxContenair {
      display: flex;
      align-items: center;
      p {
        font-size: 0.9rem;
      }
      span {
        color: #f7941d;
      }
      .check {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        background-color: #f7941d;
      }
    }
    button {
      color: white;
      background-color: #f7941d;
      padding: 10px 30px;
      border: none;
      font-size: 1rem;
      margin-top: 1.5rem;
      border-radius: 5px;
      margin-left: 5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .rightSide {
    @media only screen and (max-width: 799px) {
      width: 400px !important;
      padding: 0;
    }
    h3 {
      margin-top: 3rem;
      font-weight: 400;
    }
    a {
      font-size: 0.8rem;
      text-decoration: none;
      color: #f7941d;
      font-weight: 500;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }
    /* .already {
      @media only screen and (max-width: 799px) {
        padding-top: 0px !important;
        margin-top: 1rem;
        border: 1px solid red;
        height: 100px;
      } */
    /* } */
  }
  .notice {
    @media only screen and (max-width: 799px) {
      width: 100%;
    }
    border: 1px solid #ccc;
    width: 300px;
    padding: 5px 15px;
    margin-top: 4rem;

    h4 {
      color: #f7941d;
      font-weight: 500;
      font-size: 1rem;
    }
    p {
      margin-top: 1rem;
      font-size: 0.8rem;
      line-height: 1rem;
      font-weight: 500;
    }
  }
`;

const FormSide = () => {
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
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      };
      const response = await fetch(
        "https://yuding.herokuapp.com/accounts/signup",
        requestoptions
      );

      const jsonData = await response.json();
      console.log(jsonData.data);
      console.log(jsonData.token);
      if (jsonData.token) {
        localStorage.setItem("user", JSON.stringify(jsonData.token));
      }

      if (response.status == 201) {
        Router.push({
          pathname: "http://localhost:8081/CreationRestaurant",
        });
      }
      reset();
      //   setSuccess(true);
      //   console.log({ success });
      //   setGgetOpened(true);
      //   reset();
      // } else {
      //   setSuccess(false);
      // }
    } catch (error) {
      console.log("error :", error.message);
    }
  };

  return (
    <Contenair>
      <div className="formContenair">
        <h2>Vous allez créer votre compte yuding Restaurateur</h2>
        <div className="advice">
          <p>
            <Icon icon="grommet-icons:validate" className="icone" />{" "}
            <span>Publication gratuite de votre restaurant sur Yuding</span>
          </p>
          <p>
            <Icon icon="ant-design:star-outlined" className="icone" />{" "}
            <span>Assistance technique gratuite</span>
          </p>
          <p>
            <Icon icon="vaadin:invoice" className="icone" />{" "}
            <span>
              Facturation à l'utilisation : Aucun frais n’est percçu à la
              consommation des services Yuding
            </span>
          </p>
        </div>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                label="Votre nom"
                variant="outlined"
                className="textfield"
                type="text"
                {...register("lastName", { required: true })}
              />
              <TextField
                label="Votre prénom"
                variant="outlined"
                className="textfield"
                type="text"
                {...register("firstName", { required: true })}
              />
            </div>
            <TextField
              label="votre adresse mail"
              variant="outlined"
              className="textfield-email"
              type="email"
              {...register("email", { required: true })}
            />
            <TextField
              label="votre numéro de téléphone"
              variant="outlined"
              className="textfield-phone"
              type="tel"
              {...register("phone", { required: true })}
            />
            <div className="passwordFieldsContenair">
              <TextField
                label="Créer un mot de passe"
                variant="outlined"
                type="password"
                className="textfield-pass-word"
                {...register("password", { required: true })}
              />
              <TextField
                label="Confirmer le mot de passe"
                variant="outlined"
                type="password"
                className="textfield-pass-word"
                {...register("passwordConfirm", { required: true })}
              />
            </div>
            <div className="checkboxContenair">
              {/* <ControlledCheckbox /> */}
              <input type="checkbox" className="check" />
              <p>
                Je souhaite créer un compte Yuding restaurateur et j'accepte
                <span> les conditions d'utilisation</span>
              </p>
            </div>
            <button type="submit">Créer mon compte</button>
          </form>
        </Box>
      </div>
      <div className="rightSide">
        <div className="notice">
          <Link href="/Explorer">
            <a>
              <h4>Vous n'êtes pas restaurateur ?</h4>
            </a>
          </Link>
          <p>
            Cette page est destinée uniquement aux restaurateurs. Si vous voulez
            explorer, rechercher ou vous souhaitez reserver un restaurant,{" "}
            <a>cliquez-ici</a>
          </p>
        </div>
        <div className="already">
          <h3>Déjà restaurateur ?</h3>
          <Link href="Login">
            <a>
              <Icon icon="dashicons:arrow-right-alt2" /> Se connecter
            </a>
          </Link>
        </div>
      </div>
    </Contenair>
  );
};

export default FormSide;
