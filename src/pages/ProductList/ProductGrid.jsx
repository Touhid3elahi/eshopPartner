import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Productlist from './Productlist';

const Home = () => {
  return (
    <>
      <Header />
      <Productlist/>
      <Footer />
    </>
  );
};

export default Home;