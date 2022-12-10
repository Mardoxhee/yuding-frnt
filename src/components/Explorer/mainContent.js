import styled from "styled-components";
import SimpleAccordion from "../shared/Acordeon";
import CheckboxLabels from "../shared/Checkbox";
import Pagination from "@mui/material/Pagination";
import Card from "../shared/Card";
import Link from "next/link";
import Skeleton from "../shared/Skeleton";
import { useState, useEffect } from "react";
import moment from "moment";
import CustomizedSnackbars from "./../shared/CustomizedSnackbars";

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
const MainBody = ({
  data,
  handlePageChange,
  isloading,
  count,
  searchState,
  name,
}) => {
  let nbrPage = 1;
  const [categories, setCategories] = useState([]);
  const [restaurantByCategory, setRestaurantByCategory] = useState([]);

  const [getOpened, setGgetOpened] = useState(
    searchState.length === 0 && name ? true : false
  );

  const getClosed = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setGgetOpened(false);
  };

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

  const handleCheckBox = async (e) => {
    const checked = e.target.checked;

    if (checked == true) {
      const restaurantCategory = e.target.value;
      const url = `https://yuding-platform.onrender.com/restaurants/?category=${restaurantCategory}`;
      try {
        const response = await fetch(url);
        const jsonFile = await response.json();
        setRestaurantByCategory(jsonFile.restaurants);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getCategories();
  }, [restaurantByCategory]);

  if (count / 20 < 1) {
    nbrPage = 1;
  }
  let nombre = count / 20;
  if (nombre > 1) {
    nbrPage = Math.round(nombre);
  }
  return (
    <Contenair>
      <div className="filterContenair">
        <SimpleAccordion>
          {categories.map((category) => {
            return (
              <CheckboxLabels
                id={category._id}
                type="checkbox"
                label={category.categoryName}
                value={category._id}
                onChange={handleCheckBox}
              />
            );
          })}
        </SimpleAccordion>
      </div>

      <div className="rigthSide">
        <div className="cardContenair">
          <CustomizedSnackbars
            getOpened={getOpened}
            getClosed={getClosed}
            severity="error"
            message="Restaurant non trouvé"
          />
          {isloading === true ? (
            <Skeleton />
          ) : restaurantByCategory.length !== 0 ? (
            restaurantByCategory.map((restaurant) => {
              return <RestaurantCard restaurant={restaurant} />;
            })
          ) : (
            data.map((restaurant) => {
              return <RestaurantCard restaurant={restaurant} />;
            })
          )}
        </div>
        <Pagination
          count={5}
          className="paginate"
          onChange={handlePageChange}
        />
      </div>
    </Contenair>
  );
};

export default MainBody;
const RestaurantCard = ({ restaurant }) => {
  const [isSameOrAfterOpenedTime, setIsSameOrAfterOpenedTime] = useState(true);
  const [isSameOrBeforeClosedTime, setIsSameOrBeforeClosedTime] =
    useState(true);

  const checkRestaurantsCreneauStatus = () => {
    const getCurrentTime = new Date();
    setIsSameOrAfterOpenedTime(
      moment(new Date()).isSameOrAfter(restaurant.openTime)
    );
    setIsSameOrBeforeClosedTime(
      moment(new Date()).isSameOrBefore(restaurant.closeTime)
    );
  };

  useEffect(() => {
    checkRestaurantsCreneauStatus();
  }, []);
  return (
    <Link href={"./" + restaurant._id} key={restaurant._id}>
      <a>
        <Card
          key={restaurant._id}
          image={restaurant.coverPicture}
          category={
            restaurant.category ? restaurant.category.categoryName : "classic"
          }
          reduction={restaurant.reduction ? "-" + restaurant.reduction : "-10"}
          title={restaurant.restaurantName}
          // openStatus={isSameOrAfterOpenedTime ? "ouvert" : "fermé"}
          openStatus={
            isSameOrAfterOpenedTime && isSameOrBeforeClosedTime
              ? "ouvert"
              : "fermé"
          }
          adress="38 Av. de la justice kin GOmbe"
          className={
            isSameOrAfterOpenedTime && isSameOrBeforeClosedTime
              ? "statusOpened"
              : "statusClosed"
          }
        />
      </a>
    </Link>
  );
};
