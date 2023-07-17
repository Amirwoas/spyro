import React, { useState } from "react";
import accordionItems from "./data";

const QuestionBox = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white font-semibold text-4xl mt-16 mb-4 text-center'>Frequently Asked Question</h1>

        {/* Start Accordion */}
        <div className='w-[80%] m-16'>
          {accordionItems.map((item, index) => (

            <div key={index} className='border-b'>
              {/* Start Accordion Button*/}
              <button
                className='w-full flex justify-between items-center py-4 px-4 text-left focus:outline-none'
                onClick={() => toggleAccordion(index)}
              >
                <span className='m-4 text-white/70'>{item.question}</span> {/* Question */}
                <span className='text-white/70'>{activeIndex === index ? "-" : "+"}</span> {/* Plus Shape Accordion */}
              </button>
              {/* End Accordion Button*/}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  activeIndex === index ? "max-h-72" : "max-h-0"
                }`}
              >
                <div className='px-4 py-2 text-white bg-orange-700/10'>{item.answer}</div> {/* Question Answer */}
              </div>
            </div>

          ))}
        </div>
        {/* End Accordion */}

      </div>
    </main>
  );
};

export default QuestionBox;
