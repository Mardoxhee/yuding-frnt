/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import CategoryCard from "./../shared/CategoryCard";
import Skeleton from "./../shared/Skeleton";

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 2,
  },
  1024: {
    items: 5,
  },
};

const Carousel = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const url = "https://yuding.herokuapp.com/category";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <Skeleton />;
  }
  let items = data.categories.map((category) => {
    return (
      <CategoryCard
        title={category.categoryName}
        price="30"
        icon={category.categoryICone}
        Key={category.id}
        val={data.numberOfCategories}
      />
    );
  });
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay="true"
      autoPlayInterval="2000"
    />
  );
};
export default Carousel;
