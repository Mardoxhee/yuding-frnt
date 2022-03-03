import styled from 'styled-components';
import HorizontalLinearStepper from './Form';
import ImgSidetenair from './ImgSide';
const Contenair = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;

  .formSide {
    width: 60%;
    height: 100%;
    padding: 20px 30px;
  }
`;
const Auth = () => {
  return (
    <Contenair>
      <ImgSidetenair />
      <div className="formSide">
        <HorizontalLinearStepper />
      </div>
    </Contenair>
  );
};

export default Auth;
