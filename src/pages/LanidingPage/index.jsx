import React from 'react';
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Category from '../../components/Category';
import Instructors from '../../components/Instructors';
import Download from '../../components/Download';
import Footer from '../../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <main className="w-full bg-[#18171A] overflow-hidden h-full 2xl:container mx-auto md:px-10 px-8">
        <Category />
        <Instructors />
      </main>
      <Download />
      <Footer />
    </>
  );
};

export default LandingPage;
