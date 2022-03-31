import Banner from '../src/components/Detail/Banner';
import MainBody from '../src/components/Detail/Informations';
import { useState, useEffect } from 'react';

const Details = ({ details }) => {
  return (
    <>
      <Banner details={details} />
      <MainBody details={details} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const url = `http://127.0.0.1:3000/restaurants/${params.id}`;
  const response = await fetch(url);
  const json = await response.json();
  const det = json.restaurant;

  return {
    props: {
      details: det
    }
  };
}

export default Details;
