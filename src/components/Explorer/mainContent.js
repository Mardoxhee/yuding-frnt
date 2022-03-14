import styled from 'styled-components';
import SimpleAccordion from '../shared/Acordeon';
import CheckboxLabels from '../shared/Checkbox';
import Card from '../shared/Card';
import Link from 'next/link';
import Paginate from './../shared/Paginate';

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
  .rigthSide {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 1rem;
  }
  .cardContenair {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .paginate {
    float: right;
    align-items: right;
    display: flex;
    align-items: flex-end;
    margin-top: 1rem;
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

      <div className="rigthSide">
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
        <Paginate count={10} shape="rounded" className="pagination" />
      </div>
    </Contenair>
  );
};

export default MainBody;
