import styled from 'styled-components';

const Contenair = styled.section`
  width: 50%;
  height: 100%;
  background-image: url('./Assets/Login.jpg');
  background-size: cover;
  @media only screen and (max-width: 799px) {
    display: none;
  }
`;

const ImgContenair = () => {
  return <Contenair />;
};

export default ImgContenair;
