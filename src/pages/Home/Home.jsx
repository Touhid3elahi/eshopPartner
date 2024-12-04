import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import FeaturedCategories from "../../components/FeaturedCategories";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCategories/>
      <Footer />
    </>
  );
};

export default Home;
