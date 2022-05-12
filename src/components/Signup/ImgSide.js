import styled from 'styled-components';

const Contenair = styled.div`
  width: 40%;
  height: 100% !important;
  margin: 0;
  padding: 0;

  background-image: url('./Assets/chief2.jpg');
  background-size: cover;
  @media only screen and (max-width: 799px) {
    display: none;
  }
`;

const ImgSidetenair = () => {
  return <Contenair></Contenair>;
};

export default ImgSidetenair;
