import styled from 'styled-components';
import SimpleAccordion from '../shared/Acordeon';
import CheckboxLabels from '../shared/Checkbox';
import Card from '../shared/Card';
import Link from 'next/link';

const Contenair = styled.section`
  width: 100%;
  padding: 3rem 6rem;
  display: flex;
  .filterContenair {
    padding: 10px;
    /* border: 1px solid #afafaf; */
    width: 30%;
    height: auto !important;
  }
  .cardContenair {
    margin-left: 1rem;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const MainBody = () => {
  return (
    <Contenair>
      <div className="filterContenair">
        <SimpleAccordion>
          <CheckboxLabels label="Pizza-Italien" />
          <CheckboxLabels label="Sushi Japonais" />
          <CheckboxLabels label="Cream" />
          <CheckboxLabels label="Burghers" />
          <CheckboxLabels label="Pizza-Italien" />
          <CheckboxLabels label="Sushi Japonais" />
          <CheckboxLabels label="Cream" />
          <CheckboxLabels label="Burghers" />
        </SimpleAccordion>
      </div>

      <div className="cardContenair">
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>

        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
        <Link href={'/:id'}>
          <a>
            <Card
              category="Sushi"
              reduction="50"
              title="Japan sushi"
              openStatus="fermé"
              adress="38 Av. de la justice kin GOmbe"
            />
          </a>
        </Link>
      </div>
    </Contenair>
  );
};

export default MainBody;
