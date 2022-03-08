import Auth from '../../src/components/Signup/MainContenair';
import styled from 'styled-components';

const MainContenair = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signup = () => {
  return (
    <MainContenair>
      <Auth />
      {/* <div>irefirfh</div> */}
    </MainContenair>
  );
};

export default Signup;
