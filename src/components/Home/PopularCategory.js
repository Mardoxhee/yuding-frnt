import styled from 'styled-components';
import Title from './../shared/Title';
import Card from './../shared/Card';
import Link from 'next/link';
import Image from 'next/image';
import { useGetRestaurantsQuery } from '../../../services/restaurants';
import Squeleton from './../shared/Squeleton';

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
  padding: 10px 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  div {
    font-size: 1rem;
    display: flex;
  }

  @media only screen and (max-width: 799px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const Popular = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetRestaurantsQuery();
  return (
    <Contenair>
      <Title
        title="Les plus populaires"
        subtitle="Les resturants les plus fréquentés de la ville de la ville de Kinshasa "
      />
      <CardContenair>
        {isLoading && <Squeleton />}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.data.restaurants.map((restaurant, i) => {
            console.log(data.restaurants);
            return (
              <Link href={'/${id}'}>
                <a>
                  <Card
                    image={restaurant.image}
                    category={restaurant.category}
                    reduction="50"
                    title={restaurant.restaurantName}
                    openStatus="fermé"
                    adress="38 Av. de la justice kin GOmbe"
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
export default Popular;
