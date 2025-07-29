import React from 'react';
import Hero from '../components/hero';
import Servise from '../components/servise';
import Sugest from '../components/sugest';
import PackagesSection from '../components/PackagesSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Servise />
      <Sugest />
      <PackagesSection />
    </>
  );
};

export default HomePage;
