import styled from 'styled-components';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Box from '@mui/material/Box';

const Contenair = styled.div`
  width: 100%;
  font-family: 'poppins', sans-serif;
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
      span {
        margin-top: 1rem;
        .icone {
          font-size: 1.5rem;
          color: #ff9a62;
        }
        p {
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
  return (
    <Contenair>
      <div className="formContenair">
        <h2>Vous allez créer votre compte yuding Restaurateur</h2>
        <div className="advice">
          <span>
            <Icon icon="grommet-icons:validate" className="icone" />{' '}
            <p>Publication gratuite de votre restaurant sur Yuding</p>
          </span>
          <span>
            <Icon icon="ant-design:star-outlined" className="icone" />{' '}
            <p>Assistance technique gratuite</p>
          </span>
          <span>
            <div>
              <Icon icon="vaadin:invoice" className="icone" />{' '}
            </div>
            <div>
              <p>
                Facturation à l'utilisation : Aucun frais n’est percçu à la consommation des
                services Yuding
              </p>
            </div>
          </span>
        </div>
        <Box component="form">
          <div>
            <TextField
              id="outlined-basic"
              label="Votre nom"
              variant="outlined"
              className="textfield"
              type="text"
            />
            <TextField
              id="outlined-basic"
              label="Votre prénom"
              variant="outlined"
              className="textfield"
              type="text"
            />
          </div>
          <TextField
            id="outlined-basic"
            label="votre adresse mail"
            variant="outlined"
            className="textfield-email"
            type="email"
          />
          <TextField
            id="outlined-basic"
            label="votre numéro de téléphone"
            variant="outlined"
            className="textfield-phone"
            type="tel"
          />
          <div className="passwordFieldsContenair">
            <TextField
              id="password"
              label="Créer un mot de passe"
              variant="outlined"
              type="password"
              className="textfield-pass-word"
            />
            <TextField
              id="password"
              label="Confirmer le mot de passe"
              variant="outlined"
              type="password"
              className="textfield-pass-word"
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
          <button>Créer mon compte</button>
        </Box>
      </div>
      <div className="rightSide">
        <div className="notice">
          <h4>Vous n'êtes pas restaurateur ?</h4>
          <p>
            Cette page est destinée uniquement aux restaurateurs. Si vous voulez explorer,
            rechercher ou vous souhaitez reserver un restaurant, <a>cliquez-ici</a>
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
