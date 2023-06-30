import React from 'react';
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Category from '../../components/Category';

const LandingPage = () => {
  return (
    <>
    <main className='w-full bg-[#18171A] overflow-hidden h-full 2xl:container mx-auto'>
      <Navbar />
      <Home />
      <Category/>
    </main>
    </>
  );
};

export default LandingPage;
