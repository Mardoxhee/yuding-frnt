import HomeSection from "./../src/components/Home/HomeSection";
import Categories from "./../src/components/Home/CategorieSection";
import Popular from "./../src/components/Home/PopularCategory";
import Banner from "./../src/components/Home/Banner";
import BestOffers from "./../src/components/Home/BestOffers";
import Banner2 from "./../src/components/Home/Banner2";
import Testmonials from "./../src/components/Home/Testmonials";
import MobileApp from "../src/components/Home/MobileApp";
import Layout from "./../src/components/Layouts/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <HomeSection />
        <Categories />
        <Popular />
        <Banner />
        <BestOffers />
        <Banner2 />
        <Testmonials />
        <MobileApp />
      </Layout>
    </>
  );
};

export default Home;
