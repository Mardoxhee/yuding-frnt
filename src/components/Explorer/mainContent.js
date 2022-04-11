import styled from "styled-components";
import SimpleAccordion from "../shared/Acordeon";
import CheckboxLabels from "../shared/Checkbox";
import Pagination from "@mui/material/Pagination";
import Card from "../shared/Card";
import Link from "next/link";
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
    width: 70%;
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
    float: right;
    align-items: right;
    display: flex;
    align-items: center;
    margin-top: 3rem;
  }
`;
const MainBody = ({ searchData, data, handlePageChange }) => {
  return (
    <Contenair>
      <div className="filterContenair">
        <SimpleAccordion>
          <CheckboxLabels label="Pizza-Italien" />
          <CheckboxLabels label="Sushi Japonais" />
          <CheckboxLabels label="Cream" />
          <CheckboxLabels label="Burghers" />
          <CheckboxLabels label="Pizza-Italien" />
          <CheckboxLabels label="Sushi Japonais" />
          <CheckboxLabels label="Cream" />
          <CheckboxLabels label="Burghers" />
        </SimpleAccordion>
      </div>

      <div className="rigthSide">
        <div className="cardContenair">
          {data.map((restaurant) => {
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
          })}
        </div>
        <Pagination
          count={10}
          className="paginate"
          onChange={handlePageChange}
        />
      </div>
    </Contenair>
  );
};

export default MainBody;
