import styled from 'styled-components';
import Link from 'next/link';

const Contenair = styled.section`
  width: 100%;
  height: 420px;
  padding: 40px 100px;
  background-image: url(${({ theme }) => theme.img.images.banner2});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: end;
  color: ${({ theme }) => theme.palette.colors.white};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    width: 420px;
    text-align: center;
    background-color: ${({ theme }) => theme.palette.colors.black};
    h2 {
      font-size: 1.8rem;
    }

    button {
      padding: 10px 20px;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.palette.colors.black};
      background-color: ${({ theme }) => theme.palette.colors.white};
      margin-top: 20px;
      font-weight: 600;
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background-color: #f3f3f3;
        color: ${({ theme }) => theme.palette.colors.black};
      }
    }
  }

  @media only screen and (max-width: 799px) {
    padding: 20px 50px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    div {
      padding: 10px 5px;
      width: 100%;
      text-align: center;
      h2 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.6rem;
      }
      button {
        padding: 5px 10px;
        font-size: 0.7rem;
      }
    }
  }
`;
const Banner2 = () => {
  return (
    <Contenair>
      <div>
        <h2>Vous êtes propriétaire d’un restaurant ?</h2>
        <p>
          Rejoignez-nous pour augmenter votre visibilité en ligne. Vous aurez accès à encore plus de
          clients qui cherchent à déguster vos plats savoureux à la maison.
        </p>
        <Link href="Signup">
          <button>
            <a>Intégrer la plateforme</a>
          </button>
        </Link>
      </div>
    </Contenair>
  );
};

export default Banner2;
