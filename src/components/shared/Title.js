import styled from "styled-components";
import Soulign from "./SoulignBar2";

const Contenair = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;
  h2 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.colors.title};
    font-weight: 600;
    width: 400px;
  }
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.colors.text};
    width: 600px;
  }

  @media only screen and (max-width: 799px) {
    h2 {
      width: 200px;
    }

    span {
      width: 300px;
    }
  }
`;

const Title = ({ title, subtitle }) => {
  return (
    <Contenair>
      <Soulign />
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </Contenair>
  );
};

export default Title;
