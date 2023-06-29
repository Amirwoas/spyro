import React from 'react';
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';

const LandingPage = () => {
  return (
    <>
    <main className='w-full h-full 2xl:container mx-auto'>
      <Navbar />
      <Home />

    </main>
    </>
  );
};

export default LandingPage;
