import styled from "styled-components";

const Contenair = styled.section`
  @media only screen and (max-width: 799px) {
    width: 100%;
    height: 45vh;
    padding: 0px 0px;
  }
  width: 100%;
  height: 60vh;
  background: linear-gradient(
      0deg,
      rgba(3, 7, 9, 0.5357493339132529) 100%,
      rgba(6, 10, 11, 0.7486344879748774) 100%,
      rgba(0, 0, 0, 0.2248249641653537) 100%
    ),
    url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${({ theme }) => theme.palette.colors.white};
  padding: 3rem 100px;
  .mainContenair {
    @media only screen and (max-width: 799px) {
      padding: 10px 10px;
      bottom: 0.5rem;
      .topSide {
        margin-bottom: 0.2rem;
      }
      .bottomSide {
        h2 {
        }
        .details {
          display: flex;
          font-weight: 300;
          font-size: 0.7rem;
        }
      }
    }
    position: absolute;
    bottom: 3rem;
    .topSide {
      display: flex;
      align-items: center;
      width: 130px;
      justify-content: space-between;
      margin-bottom: 1rem;
      h4 {
        font-weight: 500;
      }
      P {
        font-style: italic;
        font-size: 0.7rem;
        font-weight: 300;
      }
      small {
        padding: 8px 15px;
        background-color: ${({ theme }) => theme.palette.colors.main};
        border-radius: 10px 10px 10px 0px;
        font-weight: 600;
        font-size: 1rem;
      }
    }
    .bottomSide {
      .details {
        display: flex;
        font-weight: 300;
        a {
          margin-left: 15px;
          font-weight: 100;

          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Banner = ({ details }) => {
  return (
    <Contenair image={details.coverPicture}>
      <div className="mainContenair">
        <div className="topSide">
          <small>8.9</small>
          <div>
            <h4>superbe</h4>
            <p>340 avis</p>
          </div>
        </div>
        <div className="bottomSide">
          <h2>{details.restaurantName}</h2>
          <div className="details">
            <p>{details.pays}-</p>
            <p>
              {details.adress[0] ? details.adress[0].number : " "}{" "}
              {details.adress[0] ? details.adress[0].street : " "}{" "}
              {details.adress[0] ? details.adress[0].quater : " "}{" "}
              {details.adress[0] ? details.adress[0].township : " "}{" "}
            </p>
            <a> Voir sur la carte</a>
          </div>
        </div>
      </div>
    </Contenair>
  );
};

export default Banner;
