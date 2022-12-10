import MainBody from "../../src/components/Explorer/mainContent";
import Head from "./../../src/components/Explorer/Head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "./../../src/components/Layouts/Layout";

const Explorer = ({ homePageSearchresult }) => {
  const router = useRouter();

  const {
    query: { restaurantName, restaurantCategory },
  } = router;

  const props = {
    restaurantName,
    restaurantCategory,
  };
  const [searchState, setSearchState] = useState(
    homePageSearchresult.length !== 0 ? homePageSearchresult : []
  );
  const [count, setCount] = useState(1);
  const [record, setRecord] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState(null);

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setCategory(value);
  //   console.log({ value });
  // };

  const getInputValue = (event) => {
    const value = event.target.value;
    setParams(value);
  };
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const url = `https://yuding-platform.onrender.com/?restaurantName=${params}`;
    try {
      const response = await fetch(url);
      const jsonFile = await response.json();
      setRecord(jsonFile.restaurants);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      console.log(error);
    }
  };

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  const getRestaurantsLength = async () => {
    const url = `https://yuding-platform.onrender.com/restaurants/length`;
    const response = await fetch(url);
    const responseInjason = await response.json();
    console.log("response of nombre de restaurant", responseInjason);
    setCount(responseInjason.numberOfRestuarants);
    try {
    } catch (error) {
      console.log(error.message);
    }
  };

  const getRestaurants = async () => {
    try {
      const url = `https://yuding-platform.onrender.com/restaurants/?page=${page}`;
      const response = await fetch(url);
      const json = await response.json();
      setRecord(
        homePageSearchresult.length === 0
          ? json.restaurants.reverse()
          : homePageSearchresult
      );

      setIsLoading(false);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    getRestaurantsLength();
    getRestaurants();
  }, [page, params, category]);
  return (
    <>
      <Layout>
        <Head handleSubmit={handleSubmit} getInputValue={getInputValue} />
        <MainBody
          name={props.restaurantName}
          searchState={searchState}
          data={record}
          handlePageChange={handlePageChange}
          isloading={isLoading}
          count={count}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const url = `https://yuding-platform.onrender.com/restaurants/?restaurantName=${query.restaurantName}`;
  const response = await fetch(url);
  const json = await response.json();

  return {
    props: {
      homePageSearchresult: json.restaurants,
    },
  };
}
export default Explorer;
