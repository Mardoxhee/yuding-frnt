import styled from 'styled-components';
import ImgContenair from './../../src/components/Login/ImgSide';
import Form from './../../src/components/Login/Form';

const MainContenair = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <MainContenair>
      <ImgContenair />
      <Form />
    </MainContenair>
  );
};

export default Login;
