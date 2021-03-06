import styled from "styled-components";
import SoulignBar from "./../shared/SoulignBar";
import Caroussel from "./Caroussel";

const Contenair = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.colors.categoryBcg};
  padding: 40px 100px;
  h2 {
    color: ${({ theme }) => theme.palette.colors.title};
    font-size: 1.7rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 799px) {
    padding: 40px 50px;
    h2 {
      text-align: center;
    }
  }
`;
const CardContenair = styled.div`
  width: 100%;
  height: auto;
  margin: 3rem;
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Contenair>
      <SoulignBar />
      <h2>Catégories des restaurants</h2>
      <CardContenair>
        <Caroussel />
      </CardContenair>
    </Contenair>
  );
};

export default Categories;
