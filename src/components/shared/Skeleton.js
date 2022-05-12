import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 5px;
  }
`;

const SkeletonCard = () => {
  return (
    <Container>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        {" "}
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
    </Container>
  );
};

export default SkeletonCard;
