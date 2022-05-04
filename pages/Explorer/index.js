import MainBody from "../../src/components/Explorer/mainContent";
import Head from "./../../src/components/Explorer/Head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Explorer = () => {
  const router = useRouter();

  const {
    query: { restaurantName, restaurantCategory },
  } = router;

  const props = {
    restaurantName,
    restaurantCategory,
  };

  const [searchData, setSearchData] = useState(true);
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(1);
  const [record, setRecord] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState(null);

  const getCategories = async () => {
    try {
      const url = `https://yuding.herokuapp.com/category`;
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json.categories);
    } catch (error) {
      error.message;
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    console.log({ value });
  };

  const getInputValue = (event) => {
    const value = event.target.value;
    setParams(value);
  };
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const url = `https://yuding.herokuapp.com/restaurants/?restaurantName=${params}&category=${category}`;
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
  // const getNumberOfRestaurant = async () => {
  //   try {
  //     const url = "http://127.0.0.1:3000/restaurants/length";
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     // console.log("real vallue of number", json.numberOfRestuarants);
  //     console.log("real vallue of number", json);
  //     setCount(json.numberOfRestuarants);
  //   } catch (error) {
  //     error.message;
  //   }
  // };

  const getRestaurants = async () => {
    try {
      const url = `https://yuding.herokuapp.com/restaurants/?page=${page}`;
      const response = await fetch(url);
      const json = await response.json();
      setRecord(json.restaurants);
      setIsLoading(false);
      setCount(json.numberOfRestuarants);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    getRestaurants();
    getCategories();
    // getNumberOfRestaurant();
  }, [page, params, category]);
  return (
    <>
      <Head
        handleSubmit={handleSubmit}
        getInputValue={getInputValue}
        handleChange={handleChange}
        categories={categories}
      />
      <MainBody
        data={record}
        handlePageChange={handlePageChange}
        isloading={isLoading}
        count={count}
      />
    </>
  );
};

export default Explorer;
