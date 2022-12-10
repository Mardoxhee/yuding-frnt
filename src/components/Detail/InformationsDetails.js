import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.palette.colors.title};
  .informations {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .sliderSide {
      @media only screen and (max-width: 799px) {
        width: 100%;
      }
      width: 50%;
      height: 50vh;
      background-color: ${({ theme }) => theme.palette.colors.main};
    }
    .textSide {
      @media only screen and (max-width: 799px) {
        width: 100%;
        h2 {
          margin-top: 1rem;
        }
      }
      width: 49%;
      height: auto;
      p {
        margin-top: 1.5rem;
        text-align: justify;
      }
    }
  }
  .Hourly {
    @media only screen and (max-width: 799px) {
      width: 100%;
      padding: 1rem 1rem;
    }
    margin-top: 5rem;
    width: 100%;
    height: auto;
    background-color: #f9f9f9;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-weight: 500;
      color: ${({ theme }) => theme.palette.colors.title};
    }
    .columnsWrapper {
      @media only screen and (max-width: 799px) {
        flex-direction: column;
      }
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      .columnsItem {
        span {
          font-size: 0.7rem;
          border: red solid 1px;
          padding: 2px 5px;
          border-radius: 5px;
        }
        p {
          color: #444444;
          font-size: 0.9rem;
        }
        h4 {
          margin: 0.6rem 0rem;
          color: #444444;
        }
        h5 {
          margin: 0.4rem 0rem;
          font-size: 1rem;
          color: #444444;
        }
        .socialMediaWrapper {
          font-size: 1.5rem;
          color: #444444;
        }
      }
    }
  }
`;

const InfoDetails = ({ details }) => {
  return (
    <Container>
      <div className="informations">
        <div className="sliderSide"></div>
        <div className="textSide">
          <h2>{details.restaurantName}</h2>
          <p>{details.description}</p>
        </div>
      </div>
      <div className="Hourly">
        <h2>Tout savoir sur le restaurant Rotana</h2>
        <div className="columnsWrapper">
          <div className="columnsItem">
            <h4>Adresse</h4>
            <p>27 Old Gloucester St, 4530</p>
            <h5>Nous suivre</h5>
            <div className="socialMediaWrapper">
              <Icon icon="ant-design:facebook-filled" />
              <Icon icon="ant-design:instagram-filled" />
              <Icon icon="ant-design:twitter-square-filled" />
            </div>
          </div>
          <div className="columnsItem">
            <h4>Heures d'ouverture</h4>
            <h5>Dejeuner</h5>
            <p>Mon. to Sat. 11.00am - 3.00pm</p>
            <h5>Dinner</h5>
            <p>Mon. to Sat. 6.00pm- 1.00am</p>
            <span>Dimanche fermé</span>
          </div>
          <div className="columnsItem">
            <h4>Services</h4>
            <h5>Carte de crédit</h5>
            <p>Mastercard, Visa, Amex</p>
            <h5>Autres</h5>
            <p>Wifi, Parking, Wheelchair Accessible</p>
          </div>
        </div>
      </div>
      <div className="mapContainer"></div>
    </Container>
  );
};

export default InfoDetails;
