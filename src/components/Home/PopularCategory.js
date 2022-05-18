import styled from "styled-components";
import Title from "./../shared/Title";
import Card from "./../shared/Card";
import Link from "next/link";
import Image from "next/image";
import { useGetRestaurantsQuery } from "../../../services/restaurants";
import Skeleton from "./../shared/Skeleton";
import { useState, useEffect } from "react";
import moment from "moment";

const Contenair = styled.section`
  width: 100%;
  background-color: #f6f6f6;
  padding: 40px 100px;
  display: flex;
  flex-direction: column;

  .more {
    text-align: right !important;
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.colors.main};
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 799px) {
    padding: 40px 10px;
    width: 100%;
    align-items: center;
  }
`;
const CardContenair = styled.div`
  padding: 10px 25px;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 799px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const Popular = () => {
  const { data, error, isLoading, isSuccess, isError } =
    useGetRestaurantsQuery();

  return (
    <Contenair>
      <Title
        title="Les plus populaires"
        subtitle="Les resturants les plus fréquentés de la ville de la ville de Kinshasa "
      />
      <CardContenair>
        {isLoading && <Skeleton />}
        {isError && error.message}
        {isSuccess &&
          data.restaurants.slice(0, 10).map((restaurant) => {
            return <RestaurantCard restaurant={restaurant} />;
          })}
      </CardContenair>
      <span className="more">
        <Link href="/Explorer">
          <a>Voir plus</a>
        </Link>
      </span>
    </Contenair>
  );
};
export default Popular;

const RestaurantCard = ({ restaurant }) => {
  const [isSameOrAfterOpenedTime, setIsSameOrAfterOpenedTime] = useState(true);
  const [isSameOrBeforeClosedTime, setIsSameOrBeforeClosedTime] =
    useState(true);

  useEffect(() => {
    checkRestaurantsCreneauStatus();
  }, []);

  const checkRestaurantsCreneauStatus = () => {
    setIsSameOrAfterOpenedTime(
      moment(Date.now()).isSameOrAfter(restaurant.openTime)
    );
    setIsSameOrBeforeClosedTime(
      moment(Date.now()).isSameOrBefore(restaurant.closeTime)
    );
  };

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
