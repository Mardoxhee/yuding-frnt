import styled from "styled-components";
import React, { useState, useEffect } from "react";
import MaterialUIPickers from "./TimePicker";
import FormPropsTextFields from "./NumberPicker";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { Icon } from "@iconify/react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import BasicModal from "./../shared/FormModal";
import Moment from "moment";
import * as yup from "yup";
import { reservationSchema } from "./../validations/reservationValidation";

const Contenair = styled.form`
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
    /* border: 2px solid red; */
    .MuiCalendarPicker-root :focus {
      background: #f7941d;
      color: white;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-left: 3rem; */
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
    a {
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

const ReservationForm = ({ close, details }) => {
  const [restaurantId, setRestaurantId] = useState(details._id);
  const [form, setForm] = useState(false);
  const [date, setDate] = React.useState(Date.now());

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(Date.now());
  const [num, setNum] = React.useState(1);

  const handleChangeNum = (e) => {
    setNum(e.target.value);
  };

  const handleChange = (newValue) => {
    // let formatedTime = Moment(newValue).format("hh:mm:ss A");
    //
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDate = (newDate) => {
    // let formatedDate = Moment(newDate).format("Do MMMM YYYY");
    setDate(newDate);
  };

  const fixForm = () => {
    if (window.scrollY >= 1) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  useEffect(() => {
    fixForm();
    window.addEventListener("scroll", fixForm);
  });
  return (
    <Contenair className={form ? "formScroll" : " nothing"}>
      <div className="title">
        <h2>Réservez votre table</h2>
        <Icon icon="emojione-v1:cross-mark" className="icone" onClick={close} />
      </div>

      <div className="calenderContenair">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker onChange={handleDate} />
        </LocalizationProvider>
      </div>
      <div className="TimeContenair">
        <div>
          <h4>Heure</h4>
        </div>
        <MaterialUIPickers value={value} onChange={handleChange} num={num} />
      </div>
      <div className="PlaceContenair">
        <h4>Nombre de place</h4>
        <FormPropsTextFields onChange={handleChangeNum} />
      </div>
      <div className="submission">
        <a onClick={handleOpen}>Réserver</a>
        <p>Nous ne percevons aucun frais lié à la réservation !</p>
        <BasicModal
          handleClose={handleClose}
          open={open}
          date={date}
          time={value}
          nbrPlaces={num}
          restaurantId={restaurantId}
        />
      </div>
    </Contenair>
  );
};

export default ReservationForm;
