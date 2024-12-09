import React from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedCategories from "../../components/FeaturedCategories";
import TrendingProduct from "../../components/Trending"
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories/>
      <TrendingProduct/>
    </>
  );
};

export default Home;
