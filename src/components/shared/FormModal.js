import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import * as yup from "yup";
import { reservationSchema } from "./../validations/reservationValidation";
import { useForm } from "react-hook-form";
import Moment from "moment";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import btnloading from "./../../../public/Assets/btnloading.gif";
import CustomizedSnackbars from "./CustomizedSnackbars";

const Container = styled.div`
  width: 100%;
  height: 100%;
  p {
    text-align: center;
    margin: 1rem;
  }
  h2 {
    text-align: center;
  }
  .btn-load {
    width: 100%;
    display: flex;
    justify-content: center;

    margin-top: 1rem;
  }
  .modal-inpt {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .textfld {
      margin: 5px;
      width: 48%;
    }
    .area {
      width: 100% !important;
    }
  }
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
  .modNone {
    display: none;
  }
  .mod {
    width: 100% !important;
    height: 100% !important;
    background: red;
    z-index: 5;
    position: absolute;
    margin-left: -31.5px;
    margin-top: -149px;
  }
  .d-none {
    display: none;
  }

  .failed {
    display: none;
  }
  .sucess {
    display: block;
  }
  .loadingSpinner {
    width: 20px !important;
    height: 20px !important;
    display: none;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #F7941D",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  handleClose,
  open,
  nbrPlaces,
  time,
  date,
  restaurantId,
}) {
  const [success, setSuccess] = useState(false);
  const [loading, setloading] = useState(true);
  const [getOpened, setGgetOpened] = React.useState(false);

  const getClosed = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setGgetOpened(false);
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
        // Adding body or contents to send
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      };
      const response = await fetch(
        "https://yuding.herokuapp.com/reservations",
        requestoptions
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setloading(false);
      if (response.status == 201) {
        setSuccess(true);
        console.log({ success });
        setGgetOpened(true);
        reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.log("error :", error.message);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <h2>Confirmer votre réservation</h2>
            <p>
              Vous avez opté pour {nbrPlaces} places, en date du{" "}
              {Moment(date).format("Do MMMM YYYY")} à{" "}
              {Moment(time).format("hh:mm:ss A")}
            </p>
            <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <form className="modal-inpt" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="votre prenom"
                  variant="outlined"
                  className="textfld"
                  type="input"
                  {...register("prenomClient", { required: true })}
                />
                <TextField
                  label="votre nom"
                  variant="outlined"
                  className="textfld"
                  type="input"
                  {...register("nomduClient", { required: true })}
                />
                <TextField
                  label="Téléphone"
                  variant="outlined"
                  className="textfld"
                  type="input"
                  {...register("phoneNumber", { required: true })}
                />
                <TextField
                  label="e mail"
                  variant="outlined"
                  className="textfld"
                  type="input"
                  {...register("emailClient")}
                />
                <TextField
                  label="message"
                  multiline
                  rows={4}
                  type="input"
                  //   defaultValue="Laissez un message, une remarque, une précision"
                  className="textfld area"
                  {...register("message")}
                />
                <TextField
                  variant="outlined"
                  className="textfld d-none"
                  type="input"
                  value={date}
                  {...register("date")}
                />
                <TextField
                  variant="outlined"
                  className="textfld d-none"
                  type="input"
                  value={time}
                  {...register("time")}
                />
                <TextField
                  variant="outlined"
                  className="textfld d-none"
                  type="input"
                  value={nbrPlaces}
                  {...register("nbrePlaces")}
                />
                <TextField
                  variant="outlined"
                  className="textfld d-none"
                  type="input"
                  value={restaurantId}
                  {...register("restaurant")}
                />
                <div className="btn-load">
                  <button type="submit">
                    <span className={success ? "failed" : "sucess"}>
                      Confirmer
                    </span>
                    <span className="loadingSpinner">
                      <Image src={btnloading} className="imgSpinner" />
                    </span>
                    <Icon
                      className={success ? "sucess" : "failed"}
                      icon="healthicons:yes-outline"
                    />
                  </button>
                </div>
              </form>
            </Box>
            <CustomizedSnackbars getOpened={getOpened} getClosed={getClosed} />
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
