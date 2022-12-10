import Banner from "../src/components/Detail/Banner";
import MainBody from "../src/components/Detail/Informations";
import Layout from "./../src/components/Layouts/Layout";

const Details = ({ details }) => {
  return (
    <>
      <Layout>
        <Banner details={details} />
        <MainBody details={details} />
      </Layout>
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
