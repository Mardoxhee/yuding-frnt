import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Contenair = styled.div`
  width: 100%;
  padding: 0% 6.5%;
  padding-top: 5%;
  padding-bottom: 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  @media only screen and (max-width: 799px) {
    padding-top: 4.5rem;
    flex-direction: column;
    p {
      text-align: center;
    }
  }

  background-color: ${({ theme }) => theme.palette.colors.haadwhite};
  .searchbar {
    background-color: ${({ theme }) => theme.palette.colors.white};
    padding: 5px 10px;
    border-radius: 5px;
    @media only screen and (max-width: 799px) {
      margin: 0.5rem;
    }
    .icone {
      @media only screen and (max-width: 799px) {
        display: block;
        font-size: 1.5rem;
      }
      display: none;
    }
    input {
      width: 15rem;
      border: none;
      outline: none;
      @media only screen and (max-width: 799px) {
        max-width: 12rem;
      }
    }
    button {
      background-color: ${({ theme }) => theme.palette.colors.main};
      padding: 10px 20px;
      border-radius: 5px;
      outline: none;
      border: 0;
      color: white;
      &:hover {
        cursor: pointer;
      }
      @media only screen and (max-width: 799px) {
        span {
          display: none;
        }
      }
    }
    @media only screen and (max-width: 799px) {
      display: flex;
      width: auto;
    }
  }
`;

const Head = ({ handleSubmit, getInputValue }) => {
  return (
    <Contenair>
      <div>
        <p>+300 restaurants disponibles sur la plateforme</p>
      </div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input onChange={getInputValue}></input>
        <button type="submit">
          <span>Rechercher</span>
          <Icon icon="bx:bx-search" className="icone" />
        </button>
      </form>
    </Contenair>
  );
};

export default Head;
