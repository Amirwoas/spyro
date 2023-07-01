import React from 'react';
import Button from '../Button';

const Home = () => {
  return (
    <>
      <main className="w-full h-[95vh] sm:h-screen bg flex items-center px-10 md:px-16">
        {/* grideint */}
        <span className="fade w-full absolute bottom-0 right-0 overflow-hidden h-2/5"></span>

        <div className="max-w-xs md:max-w-xl flex flex-col justify-center gap-y-6">
          {/* title  */}
          <span className="text-slate-50 font-Orbitron text-4xl">
            <h1 className="stroke-orange-600 fill-orange-600 inline stroke">Unleash</h1>
            <h1 className="inline leading-relaxed"> your Inner Athlete</h1>
          </span>
          {/* description */}
          <span className="text-slate-50">
            <p>
              Get ready to sweat it out and achieve your fitness goals with our
              high-energy fitness classes! Our classes are designed to cater to all
              fitness levels and provide a fun and motivating environment to help you
              reach your peak performance.
            </p>
          </span>
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
