import styled from "styled-components";
import Title from "./../shared/Title";
import Card from "./../shared/LargeCard";
import Link from "next/link";
import { useGetRecomandedRestaurantsQuery } from "./../../../services/restaurants";
import Skeleton from "./../shared/Skeleton";

const Contenair = styled.section`
  padding: 40px 100px;
  padding-bottom: 60px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.palette.colors.offers};

  @media only screen and (max-width: 799px) {
    padding: 20px 40px;
  }
  .more {
    float: right;
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.colors.main};
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const CardContenair = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: #606060;
    h3 {
      color: black;
    }
  }
`;

const BestOffers = () => {
  const { data, error, isLoading, isSuccess, isError } =
    useGetRecomandedRestaurantsQuery();
  return (
    <Contenair>
      <Title
        title="Nos meilleures offres"
        subtitle="Les restaurants les mieux cotés par la communuaté Yuding "
      />
      <CardContenair>
        {isLoading && <Skeleton />}
        {isError && error.message}
        {isSuccess &&
          data.restaurants.slice(0, 6).map((restaurant) => {
            return (
              <Link href={"./" + restaurant._id} key={restaurant._id}>
                <a>
                  <Card
                    country={restaurant.pays}
                    restaurantName={restaurant.restaurantName}
                    adress="Socimat KInshas Ngaliema"
                    reduction="45"
                    price={restaurant.prixMoyen}
                  />
                </a>
              </Link>
            );
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

export default BestOffers;
