import styled from "styled-components";
import { Icon } from "@iconify/react";
import meal from "./../../../public/Assets/meal.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

const Contenair = styled.div`
  @media only screen and (max-width: 799px) {
    width: 100%;
    .mealTitle {
      margin: 0px 10px !important;
      h3 {
        font-size: 0.8rem;

        text-align: left !important;
      }
      h4 {
        font-size: 0.7rem;
        font-weight: 200;
        text-align: left !important;
      }
    }
    button {
      font-size: 1.5rem !important;
      background: none;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
    .price {
      font-weight: 600;
      font-size: 0.7rem !important;
      color: #4e4e4e;
      margin: 0px 10px;
      margin-top: -5px;
    }
    .imgContenair {
      width: 22%;
      display: flex;
      align-items: center;
      justify-content: center;
      display: flex;

      overflow: hidden;
      .imgContent {
        flex-shrink: 0;
        min-width: 100% !important;
        min-height: 100% !important;
      }
    }
  }
  margin: 1.3rem 0px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 5px;
  border: 1px solid #bcbcbc;
  .mealTitle {
    h3 {
      margin: 0 !important;
      text-align: left !important;
    }
    h4 {
      font-weight: 200;
      text-align: left !important;
    }
  }
  .price {
    font-weight: 600;
    font-size: 1.2rem;
    color: #4e4e4e;
  }
  .plusIcone {
    color: ${({ theme }) => theme.palette.colors.main} !important;
    transition: all 700ms ease;
    &:focus {
      transition: all 500ms ease;
    }
  }
  .imgContenair {
    width: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
    .imgContent {
      flex-shrink: 0;
      min-width: 100% !important;
      min-height: 100% !important;
    }
  }
  button {
    font-size: 2rem;
    background: none;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const MealCard = ({ title, subtitle, price, click, handleClick }) => {
  return (
    <Contenair>
      <div className="imgContenair">
        <Image src={meal} alt="meal_image" className="imgContent" />
      </div>
      <div className="mealTitle">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className="price">{price}$</div>
      <button className="plusIcone">
        <Icon
          onClick={handleClick}
          icon={
            !click ? "akar-icons:circle-plus" : "ic:baseline-horizontal-rule"
          }
        />
      </button>
    </Contenair>
  );
};

export default MealCard;
