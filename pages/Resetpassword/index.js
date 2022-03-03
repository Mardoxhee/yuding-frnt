import styled from 'styled-components';
import ImgContenair from './../../src/components/resetPassword/ImgSide';
import Form from './../../src/components/resetPassword/Form';

const MainContenair = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Resetpassword = () => {
  return (
    <MainContenair>
      <ImgContenair />
      <Form />
    </MainContenair>
  );
};

export default Resetpassword;
