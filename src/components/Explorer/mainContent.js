import styled from "styled-components";
import SimpleAccordion from "../shared/Acordeon";
import CheckboxLabels from "../shared/Checkbox";
import Pagination from "@mui/material/Pagination";
import Card from "../shared/Card";
import Link from "next/link";
import Skeleton from "../shared/Skeleton";
import { useState, useEffect } from "react";

const Contenair = styled.section`
  width: 100%;
  padding: 3rem 6rem;
  display: flex;
  @media only screen and (max-width: 799px) {
    flex-direction: column;
    padding: 1rem;
  }
  .filterContenair {
    @media only screen and (max-width: 799px) {
      width: 100%;
    }
    padding: 10px;
    width: 30%;
    height: auto !important;
  }
  .rigthSide {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 1rem;
  }
  .cardContenair {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
  .paginate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
`;
const MainBody = ({ data, handlePageChange, isloading, count }) => {
  let nbrPage = 1;
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const url = `https://yuding.herokuapp.com/category`;
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json.categories);
    } catch (error) {
      error.message;
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  if (count / 20 < 1) {
    nbrPage = 1;
  }
  let nombre = count % 20;
  if (nombre > 1) {
    nbrPage = Math.trunc(nombre);
    console.log(count);
    console.log("nombre page:", nbrPage);
  }
  return (
    <Contenair>
      {/* <div className="filterContenair">
        <SimpleAccordion>
          {categories.map((category) => {
            return (
              <CheckboxLabels
                label={category.categoryName}
                key={category._id}
              />
            );
          })}
        </SimpleAccordion>
      </div> */}

      <div className="rigthSide">
        <div className="cardContenair">
          {isloading === true ? (
            <Skeleton />
          ) : (
            data.map((restaurant) => {
              return (
                <Link href={"./" + restaurant._id} key={restaurant._id}>
                  <a>
                    <Card
                      key={restaurant.id}
                      image={restaurant.image}
                      category={
                        restaurant.category
                          ? restaurant.category.categoryName
                          : "classic"
                      }
                      reduction="50"
                      title={restaurant.restaurantName}
                      openStatus="fermé"
                      adress="38 Av. de la justice kin GOmbe"
                    />
                  </a>
                </Link>
              );
            })
          )}
        </div>
        <Pagination
          count={2}
          className="paginate"
          onChange={handlePageChange}
        />
      </div>
    </Contenair>
  );
};

export default MainBody;
