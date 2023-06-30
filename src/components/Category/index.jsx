import React, { useState } from 'react'
import data from './data'

const Category = () => {
    // accordion 
    const [select,setSelected] = useState(3);
    const handleClick = (index) => {
        if (index !== select) {
            setSelected(index);
         } else {
           setSelected(null);
        }
     };
    //  bg accordion style
    const divStyle = (imgSrc) => ({
        
      })

  return (
    <>
    <div className='w-full flex flex-col items-center justify-center border-none px-8 py-20'>
        <h1 className='text-slate-50 font-semibold text-2xl sm:text-3xl pb-20'> Find what moves you</h1>
        <div className='w-full h-full gap-20 lg:gap-10 flex flex-wrap flex-row-reverse items-center justify-center sm:justify-around'>
            {/* acordian image */}
            {data.map((item, index)=> {
                return (
                    <section onClick={() => handleClick(index)} style={{backgroundImage: `url(${select == index ? `${item.bigImg}` : `${item.miniImg}`})`}} className={`bg-cover min-[438px]:mx-14 sm:mx-6 md:mx-14 lg:mx-0 bg-no-repeat bg-center duration-300 bg-red-500 relative h-96 rounded-tl-[50px] ${ select == index ? "w-80" : " w-40"}`}>
                    {/* fade */}
                    <span className={`w-full h-full duration-300 absolute rounded-tl-[50px] flex items-end justify-center ${ select == index ? "active-fade" : "fade-normal"}`}>
                        <div className='absolute w-full h-1/3 gap-x-4 px-1 text-slate-50 flex items-end justify-center'>
                            {/* title */}
                            <span className={`text-2xl h-full duration-300 flex text-center justify-center ${ select == index ? " items-center" : "items-end py-10"}`}>{item.title}</span>
                            {/* caption */}
                            <span className={`text-xs h-full duration-300 flex items-center justify-center ${select == index ? "inline" : " hidden"}`}>{item.caption}</span>
                        </div>
                    </span>
                </section>
                )
            })}

        </div>
    </div>
    </>
  )
}

export default Category