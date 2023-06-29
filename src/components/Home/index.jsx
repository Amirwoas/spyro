import React from 'react';
import Button from '../Button';

const Home = () => {
  return (
    <>
      <main className="w-full h-screen bg flex items-center">
                {/* grideint */}
                <span className='fade w-full absolute bottom-0 right-0 overflow-hidden h-1/5'></span>

            {/* button */}
            <div className=''>
              <Button text="start free trial"/>
            </div>

      </main>
    </>
  );
};

export default Home;
