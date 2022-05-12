import styled from "styled-components";
import Image from "next/image";
import * as React from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "./../../components/shared/LoadingButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Router from "next/router";

const FormContenair = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 799px) {
    width: 100%;
    padding: 0rem 10%;
  }
  form {
    @media only screen and (max-width: 799px) {
      width: 100%;
    }
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 18rem;
    .MuiLoadingButton-root {
      padding: 1rem 1rem;
      background-color: #f7941d;
    }
    .passwordforgotten {
      font-size: 0.7rem;
      display: flex;
      justify-content: flex-end;
      color: #f7941d;
      margin: 10px 0px;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      font-size: 0.7rem;
      display: flex;
      justify-content: flex-end;
      margin: 10px 0px;
      a {
        color: #f7941d;
        margin-left: 5px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #f7941d;
    }
    .MuiFormLabel-root.Mui-focused {
      color: #212121 !important;
    }
  }
`;

const Form = () => {
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
        "https://yuding.herokuapp.com/accounts/login",
        requestoptions
      );

      const jsonData = await response.json();
      console.log(jsonData.status);
      console.log(jsonData.token);
      if (jsonData.token) {
        localStorage.setItem("user", JSON.stringify(jsonData.token));
      }

      if (response.status == 200) {
        Router.push({
          pathname: "http://localhost:8081/Login",
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
    <FormContenair>
      <div className="imgContenair">
        <Link href="/">
          <a>
            <Image
              src="/Assets/logo/Logo.png"
              alt="logoYuding"
              width="200px"
              height="80px"
              className="logoContent"
            />
          </a>
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Votre adresse mail"
          variant="outlined"
          className="textfield"
          {...register("email", { required: true })}
        />
        <TextField
          id="password"
          label="Votre mot de passe"
          variant="outlined"
          type="password"
          className="textfield-pass-word"
          {...register("password", { required: true })}
        />
        <Link href="Resetpassword">
          <a className="passwordforgotten">(mot de passe oublié ?)</a>
        </Link>
        <LoadingButton
          className="buttonConnexion"
          action="se connecter"
          type="submit"
        />
        <p>
          Pas encore inscrit ?
          <Link href="Signup">
            <a> Créer un compte </a>
          </Link>
        </p>
      </form>
    </FormContenair>
  );
};

export default Form;
