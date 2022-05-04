import styled from "styled-components";
import { Icon } from "@iconify/react";
import Select from "react-select";
import { useState, useEffect } from "react";
import SearchBar from "./../shared/SearchBar";

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
    .form-select {
      border: none;
      margin: 0px 10px;
      border-left: 1px solid black;
      padding: 0rem 1rem;
      &:focus {
        outline: none;
      }
      @media only screen and (max-width: 799px) {
        padding: 0rem 0.2rem;
        margin: 5px;
        height: 20px;
      }
    }
    @media only screen and (max-width: 799px) {
      margin: 0.5rem;

      align-items: center;
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
        max-width: 9rem;
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

const Head = ({ handleSubmit, getInputValue, handleChange, categories }) => {
  return (
    <Contenair>
      <div>
        <p>+300 restaurants disponibles sur la plateforme</p>
      </div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input onChange={getInputValue}></input>
        <select
          label="Sélectionnez une catégorie"
          className="form-select"
          onChange={handleChange}
        >
          <option value={categories[0]} selected>
            catégorie
          </option>
          {categories.map((category) => {
            return (
              <>
                <option value={category._id} key={category._id}>
                  {category.categoryName}{" "}
                </option>
              </>
            );
          })}
        </select>
        <button type="submit">
          <span>Rechercher</span>
          <Icon icon="bx:bx-search" className="icone" />
        </button>
      </form>
    </Contenair>
  );
};

export default Head;
