import styled from "styled-components";

const Contenair = styled.section`
  padding: 40px 100px;
  width: 100%;
  height: auto;
  border-radius: 10px;

  div {
    height: 422px;
    width: 100%;
    background: linear-gradient(
        0deg,
        rgba(3, 7, 9, 0.5357493339132529) 100%,
        rgba(6, 10, 11, 0.7486344879748774) 100%,
        rgba(0, 0, 0, 0.2248249641653537) 100%
      ),
      url(${({ theme }) => theme.img.images.banner});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    color: ${({ theme }) => theme.palette.colors.white};
    .yuding {
      font-size: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
    span {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 799px) {
    padding: 40px 20px;
    div {
      width: 100%;
      height: 200px;
      padding: 0px 20px;
      .yuding {
        font-size: 1.3rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      span {
        font-size: 0.8rem;
      }
    }
  }
`;

const Banner = () => {
  return (
    <Contenair>
      <div>
        <span className="yuding">Yuding</span>
        <h2>Plus de 200 restaurants</h2>
        <span>Explorer et Réserver facilement aux meilleurs prix ! </span>
      </div>
    </Contenair>
  );
};

export default Banner;
