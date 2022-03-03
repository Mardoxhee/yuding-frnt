import styled from 'styled-components';
import Image from 'next/image';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from './../../components/shared/LoadingButton';
import Link from 'next/link';

const FormContenair = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    @media only screen and (max-width: 799px) {
      padding: 0;
      width: 300px;
    }
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 12rem;
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
      margin: 5px 0px;
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
    /* .textfield:hover {
      border : solid 2px red;
    } */
  }
`;

const Form = () => {
  return (
    <FormContenair>
      <div className="imgContenair">
        <Image
          src="/Assets/logo/Logo.png"
          alt="logoYuding"
          width="200px"
          height="80px"
          className="logoContent"
        />
      </div>

      <form>
        <TextField
          id="outlined-basic"
          label="Entrez votre adresse e-mail"
          variant="outlined"
          className="textfield"
          inputProps={{ outlined: '#F7941D' }}
          //
        />
        <LoadingButton className="buttonConnexion" action="Réinitialiser le mot de passe" />
        <Link href="Login">
          <a className="passwordforgotten">(se connecter )</a>
        </Link>
      </form>
    </FormContenair>
  );
};

export default Form;
