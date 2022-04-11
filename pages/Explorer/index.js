import MainBody from "../../src/components/Explorer/mainContent";
import Head from "./../../src/components/Explorer/Head";
import { useState, useEffect } from "react";

const Explorer = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getInputValue = (event) => {
    const value = event.target.value;
    setParams(value);
    
  };
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const url = `http://127.0.0.1:3000/restaurants/?restaurantName=${params}`;
    try {
      const response = await fetch(url);
      const jsonFile = await response.json();
      setRecord(jsonFile.restaurants);
      console.log({ record });
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
  const getRestaurants = async () => {
    try {
      const url = `http://127.0.0.1:3000/restaurants/?page=${page}`;
      const response = await fetch(url);
      const json = await response.json();
      setRecord(json.restaurants);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    getRestaurants();
    console.log("data", record);
  }, [page]);
  return (
    <>
      <Head handleSubmit={handleSubmit} getInputValue={getInputValue} />
      <MainBody data={record} handlePageChange={handlePageChange} />
    </>
  );
};

export default Explorer;
