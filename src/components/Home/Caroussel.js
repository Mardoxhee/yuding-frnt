/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import CategoryCard from './../shared/CategoryCard';
import CategorySqueleton from './../shared/CategorySqueleton';

const responsive = {
  0: {
    items: 1
  },
  512: {
    items: 2
  },
  1024: {
    items: 5
  }
};

const Carousel = () => {
  // const { data, error, isLoading, isSuccess, isError } = useGetCategoriesQuery();

  // let items = error
  //   ? 'something went wrong'
  //   : isLoading
  //   ? 'loading'
  //   : isSuccess &&
  //     data &&
  //     data.categories.map((category) => {
  //       console.log('data:', data.categories);
  //       return (
  //         <CategoryCard
  //           title={category.categoryName}
  //           price="30"
  //           icon={category.categoryICone}
  //           Key={category.id}
  //         />
  //       );
  //     });

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const url = 'http://127.0.0.1:3000/category';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <CategorySqueleton />;
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
    // {isLoading && 'Loading...'}
    // {isError && error.message}

    // {isSuccess &&
    //   data.categories.map((category) => {
    //     console.log(data.categories);
    //     return (
    //       <CategoryCard
    //         title={category.categoryName}
    //         price="30"
    //         icon={category.categoryICone}
    //         Key={category.id}
    //       />
    //     );
    //   })}
  );
};
export default Carousel;
