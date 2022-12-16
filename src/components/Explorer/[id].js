import MainBody from "./../Detail/Informations";
import Banner from "./../Detail/Banner";

const Details = ({ details }) => {
  return (
    <>
      <Banner details={details} />
      <MainBody details={details} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const url = `https://yuding-platform.onrender.com/restaurants/${params.id}`;
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
