import styled from "styled-components";

const Wrapper = styled.div`
  @media only screen and (max-width: 799px) {
    width: 90%;
    height: 80%;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: auto;
  background-color: white;
  border: 1px solid #f7941d;
  box-shadow: 24px;
  /* box-shadow: */
  padding: 15px;

`;

const ModalWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default ModalWrapper;
