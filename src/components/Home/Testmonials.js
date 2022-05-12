import styled from "styled-components";
import Title from "./../shared/Title";
import { CardContenair } from "./BestOffers";
import TestmoniCard from "../shared/TestmoniCard";
import { useGetTemoignagesQuery } from "./../../../services/restaurants";

const Contenair = styled.section`
  padding: 40px 100px;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.colors.white};
  .cardContenair {
    padding: 20px 100px;
    @media only screen and (max-width: 799px) {
      padding: 10px 40px;
    }
  }

  @media only screen and (max-width: 799px) {
    padding: 20px 30px;
  }
`;

const Testmonials = () => {
  const { data, error, isLoading, isSuccess, isError } =
    useGetTemoignagesQuery();
  return (
    <Contenair>
      <Title
        title="Ce que disent nos 203 restaurateurs membres"
        subtitle="Les avis ne peuvent être faits que par les convives qui ont mangé dans ce restaurant en passant par la plateforme Yuding "
      />
      <CardContenair className="cardContenair">
        {isLoading && "loading..."}
        {isError && error.message}
        {isSuccess &&
          data.temoignages.slice(0, 3).map((temoignage) => {
            return (
              <TestmoniCard
                author="Arslène"
                fonction={temoignage.role}
                content={temoignage.temoignageContent}
              />
            );
          })}
      </CardContenair>
    </Contenair>
  );
};

export default Testmonials;
