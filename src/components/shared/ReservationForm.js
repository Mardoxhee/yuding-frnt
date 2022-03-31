import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import StaticDatePickerLandscape from './DatePicker';
import MaterialUIPickers from './TimePicker';
import FormPropsTextFields from './NumberPicker';
import { Icon } from '@iconify/react';

const Contenair = styled.div`
  @media only screen and (max-width: 799px) {
    margin-top: 2px;
    width: 100%;
  }
  width: 425px;
  height: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  border: #ebebeb solid 1px;
  .title {
    @media only screen and (max-width: 799px) {
      height: 50px;
      font-size: 0.6rem;
      padding: 0px 0px;
      align-items: center;
      justify-content: space-between;
      padding: 0px 40px;
      .icone {
        font-size: 1rem;
        display: block !important;
      }
    }
    .icone {
      display: none;
    }
    padding: 0px 50px;
    text-align: center;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    font-size: 0.8rem;
    width: 100%;
  }
  .calenderContenair {
    @media only screen and (max-width: 799px) {
      padding-left: 0;
      padding-bottom: 0px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3rem;
    margin: 0;
  }
  .TimeContenair {
    @media only screen and (max-width: 799px) {
      width: 100%;
      padding: 10px 20px;
      h4 {
        margin-right: 20px;
      }
    }
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .PlaceContenair {
    @media only screen and (max-width: 799px) {
      box-sizing: border-box !important;
      width: 100%;
      padding: 10px 20px;

      h4 {
        font-size: 0.8rem;
      }
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    padding: 10px;
    background-color: #f8f8f8;
    padding-left: 20px;
  }

  .submission {
    @media only screen and (max-width: 799px) {
      p {
        font-size: 0.6rem;
      }
      button {
        font-size: 1rem;
        margin: 2px;
      }
    }
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      border: 0;
      background-color: ${({ theme }) => theme.palette.colors.main};
      padding: 0.6rem 2rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.palette.colors.white};
      border-radius: 5px;
      margin: 5px;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      text-align: center;
      width: 300px;
    }
  }
`;

const ReservationForm = ({ handleClose }) => {
  const [form, setForm] = useState(false);

  const fixForm = () => {
    if (window.scrollY >= 1) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  useEffect(() => {
    fixForm();

    window.addEventListener('scroll', fixForm);
  });
  return (
    <Contenair className={form ? 'formScroll' : ' nothing'}>
      <div className="title">
        <h2>Réservez votre table</h2>
        <Icon icon="emojione-v1:cross-mark" className="icone" onClick={handleClose} />
      </div>

      <div className="calenderContenair">
        <StaticDatePickerLandscape />
      </div>
      <div className="TimeContenair">
        <div>
          <h4>Heure</h4>
        </div>

        <MaterialUIPickers />
      </div>
      <div className="PlaceContenair">
        <h4>Nombre de place</h4>
        <FormPropsTextFields />
      </div>
      <div className="submission">
        <button type="reset">Réserver</button>
        <p>Nous ne percevons aucun frais lié à la réservation !</p>
      </div>
    </Contenair>
  );
};

export default ReservationForm;
