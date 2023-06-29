import React from 'react';
import Button from '../Button';

const Home = () => {
  return (
    <>
      <main className="w-full h-screen bg flex items-center px-10 md:px-16">
        {/* grideint */}
        <span className="fade w-full absolute bottom-0 right-0 overflow-hidden h-1/5"></span>

        <div>
          {/* title  */}
          <span></span>
          {/* description */}
          <span></span>
          {/* button */}
          <div className="">
            <Button text="start free trial" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
