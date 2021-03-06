import Banner from "../src/components/Detail/Banner";
import MainBody from "../src/components/Detail/Informations";

const Details = ({ details }) => {
  return (
    <>
      <Banner details={details} />
      <MainBody details={details} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const url = `https://yuding.herokuapp.com/restaurants/${params.id}`;
  const response = await fetch(url);
  const json = await response.json();
  const det = json.restaurant;

  return {
    props: {
      details: det,
    },
  };
}

export default Details;
