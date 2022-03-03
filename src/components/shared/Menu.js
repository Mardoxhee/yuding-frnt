import styled from 'styled-components';
import MealCard from './MealCard';

const MenuContenair = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 799px) {
    p {
      font-size: 0.8rem;
    }
    h2 {
      margin: 0.9rem 0rem !important;
    }
    h3 {
      margin-top: 0.9rem !important;
    }
  }
  h2 {
    text-align: center;
    margin: 2rem 0rem;
  }
  h3 {
    margin-top: 2rem;
  }
  a {
    @media only screen and (max-width: 799px) {
      width: 100%;
    }
    float: right;
    text-align: right;
    color: ${({ theme }) => theme.palette.colors.main};
    width: 70%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Menu = () => {
  return (
    <MenuContenair>
      <h2>Menu</h2>

      <h3>Entrées</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur
        adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur
        adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur
        adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur
        adipisLorem
      </p>
      <div className="entreeMealContenair">
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard title="fufu madsu" subtitle="damaze préfére des kinois" price="01" />
      </div>
      <a>voir plus</a>

      <h3>Repas Principal</h3>
      <p>lorem ipsum dolor sit amet, consectetur adipis</p>
      <div className="mainMealContenair">
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
      </div>
      <a>voir plus</a>

      <h3>Déssert</h3>
      <p>lorem ipsum dolor sit amet, consectetur adipis</p>
      <div className="dessertMealContenair">
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
      </div>
      <a>voir plus</a>

      <h3>Offre spéciale</h3>
      <p>lorem ipsum dolor sit amet, consectetur adipis</p>
      <div className="dessertMealContenair">
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
        <MealCard
          title="Mexican Enchiladas"
          subtitle="Fuisset mentitum deleniti sit ea"
          price="36"
        />
      </div>
    </MenuContenair>
  );
};

export default Menu;
