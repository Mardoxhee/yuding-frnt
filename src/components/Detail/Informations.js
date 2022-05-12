import styled from "styled-components";
import BasicTabs from "../shared/InfoSwitch";
import ReservationForm from "./../shared/ReservationForm";
import BasicModal from "./../../components/shared/Modal";
import { useState, useEffect } from "react";

const MainContenair = styled.section`
  @media only screen and (max-width: 799px) {
    align-items: center;
    flex-direction: column;
    padding: 0;
    width: 100%;
    .reservationForm {
      display: none;
    }
    .informations {
      width: 100% !important;
      flex-direction: column;
      display: flex;
      flex-direction: column;
    }
  }
  .suspended-button {
    @media only screen and (max-width: 799px) {
      display: block;
    }
    padding: 0.6rem 0rem;
    background-color: ${({ theme }) => theme.palette.colors.main};
    border: none;
    color: ${({ theme }) => theme.palette.colors.white};
    font-size: 0.7rem;
    display: none;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: fixed;
    bottom: 10px;
    right: 10px;
    box-shadow: 1px 1px 14px -2px rgba(0, 0, 0, 0.25);
  }

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 40px 100px;
  position: relative;
  .reservationForm {
  }
  .informations {
    width: 65%;
  }
  .formScroll {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 65px;
  }
`;

const MainBody = ({ details }) => {
  const [click, setClick] = useState(false);
  const [meal, setMeals] = useState([]);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <MainContenair>
        <div className="informations">
          <BasicTabs
            details={details}
            click={click}
            handleClick={handleClick}
          />
        </div>
        <div className="reservationForm">
          <ReservationForm details={details} />
        </div>
        <BasicModal details={details} />
      </MainContenair>
    </>
  );
};

export default MainBody;
