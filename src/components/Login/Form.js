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
        <TextField id="outlined-basic" label="Votre nom" variant="outlined" className="textfield" />
        <TextField
          id="password"
          label="Créer un mot de passe"
          variant="outlined"
          type="password"
          className="textfield-pass-word"
        />
        <Link href="Resetpassword">
          <a className="passwordforgotten">(mot de passe oublié ?)</a>
        </Link>
        <LoadingButton className="buttonConnexion" action="se connecter" />
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
