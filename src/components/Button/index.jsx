import React from 'react';

const Button = (props) => {
  return (
    <>
      <button
        className={`w-44 bg-orange-600/60 h-11 relative shaper text-slate-50 font-semibold text-xl`}
      >
        <span className='w-full h-full hover:bg-orange-500 duration-200 bg-orange-600 absolute top-0 left-0 shape flex pt-1.5 justify-start pl-9'>
        {props.text}
        </span>
      </button>
    </>
  );
};

export default Button;
