import styled from "styled-components";
import Layout from "./../../src/components/Layouts/Layout";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Blog = () => {
  return (
    <Layout>
      <Wrapper>
        <span>Ici séra hérigé le blog de la plateforme yuding</span>
      </Wrapper>
    </Layout>
  );
};
export default Blog;
