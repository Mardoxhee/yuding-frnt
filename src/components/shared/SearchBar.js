import styled from "styled-components";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LoadingButton from "./../../components/shared/LoadingButton";
import { useState, useEffect } from "react";
import Router from "next/router";

const Contenair = styled.form`
  display: flex;
  align-items: center;
  width: 1029px;
  height: 71px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.colors.white};
  input {
    border: none;
    width: 33%;
    border-right: 2px solid #c4c4c4;
    padding: 10px;
    text-align: center;
    font-size: 1.3rem;
    color: #c4c4c4;
    font-weight: 400;
    &::placeholder {
      color: #c4c4c4;
    }
    &:focus {
      outline: none;
    }
  }
  select {
    border: none;
    width: 33%;
    text-align: center;
    font-size: 1.3rem;
    border-right: 2px solid #c4c4c4;
    padding: 10px;
    padding-left: 0;
    color: #c4c4c4;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  div {
    width: 33%;
    padding: 10px;
    display: flex;
    justify-content: center;
    button {
      .icone {
        display: none;
      }
      background-color: ${({ theme }) => theme.palette.colors.main};
      border: none;
      font-size: 1.3rem;
      padding: 12px 100px;
      border-radius: 10px;
      color: ${({ theme }) => theme.palette.colors.white};
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 799px) {
    height: 60px;
    width: 80%;
    justify-content: space-between;
    input {
      width: 70%;
      border: none;
      font-size: 1rem;
    }

    select {
      border-left: 1px solid black;
      border-right: none;
      padding: 0px 5px;
      font-size: 1rem;
    }
    div {
      display: flex;
      justify-content: center;
      height: 100%;
      padding: 0px;
      align-items: center;
      border-radius: 0px 10px 10px 0px;
      width: 20%;
      button {
        padding: 10px 10px;
        height: 100%;
        width: 100%;
        border-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0px 10px 10px 0px;

        font-size: 2.5rem;
        .icone {
          display: block;
          font-weight: 800;
        }
        small {
          display: none;
        }
      }
    }
  }
`;

const SearchBar = () => {
  const [categories, setCategories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantCategory, setRestaurantCategory] = useState("");

  const getCategories = async () => {
    try {
      const url = `https://yuding-platform.onrender.com/category`;
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json.categories);
    } catch (error) {
      error.message;
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setRestaurantCategory(value);
    console.log({ value });
  };
  const getInputValue = (event) => {
    const value = event.target.value;
    setRestaurantName(value);
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const url = `https://yuding-platform.onrender.com/restaurants/?restaurantName=${restaurantName}&category=${restaurantCategory}`;
    try {
      const response = await fetch(url);
      const jsonFile = await response.json();
      setSearchResult(jsonFile.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  const sendData = () => {
    Router.push({
      pathname: "/Explorer",
      query: {
        restaurantName,
        // restaurantCategory,
      },
    });
  };

  useEffect(() => {
    getCategories();
    handleSubmit();
  }, [restaurantName, restaurantCategory]);
  return (
    <Contenair onSubmit={handleSubmit}>
      <input
        placeholder="Entrez le nom du restaurant"
        onChange={getInputValue}
      ></input>

      <select label="Sélectionnez une catégorie" onChange={handleChange}>
        {categories.map((category) => {
          return (
            <option value={category._id} key={category._id}>
              {category.categoryName}
            </option>
          );
        })}
      </select>
      <div>
        {/* <Link href="/Explorer"> */}
        <button type="submit" onClick={sendData}>
          <small>Rechercher</small>
          <Icon icon="bx:bx-search" className="icone" />
        </button>
        {/* </Link> */}
      </div>
    </Contenair>
  );
};

export default SearchBar;
