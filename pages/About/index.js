import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const About = () => {
  return (
    <Wrapper>
      <span>A propos de la plateforme yuding</span>
    </Wrapper>
  );
};
export default About;
