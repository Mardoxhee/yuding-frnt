import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Contenair = styled.div`
  width: 100%;
  padding: 0% 6.5%;
  padding-top: 5%;
  padding-bottom: 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;

  background-color: ${({ theme }) => theme.palette.colors.haadwhite};
  .searchbar {
    background-color: ${({ theme }) => theme.palette.colors.white};
    padding: 5px 10px;
    border-radius: 5px;
    .icone {
      display: none;
    }
    input {
      width: 15rem;
      border: none;
      outline: none;
    }
    button {
      background-color: ${({ theme }) => theme.palette.colors.main};
      padding: 10px 20px;
      border-radius: 5px;
      outline: none;
      border: 0;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Head = () => {
  return (
    <Contenair>
      <div>
        <p>+300 restaurants disponibles sur la plateforme</p>
      </div>
      <div className="searchbar">
        <input></input>
        <button>
          <span>Réchercher</span>
          <Icon icon="bx:bx-search" className="icone" />
        </button>
      </div>
    </Contenair>
  );
};

export default Head;
