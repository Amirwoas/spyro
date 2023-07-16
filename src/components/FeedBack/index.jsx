import React from 'react'
import data from './data.js'

const FeedBack = () => {
  return (
    <main style={{ backgroundImage: `url('https://s8.uupload.ir/files/rectangle-12_xap5.png')` }}>

      <div className='flex flex-col justify-center items-center'>

        <h1 className='text-white font-semibold text-4xl m-14 text-center'>Client’s Feedback</h1>

        <div className='flex flex-row max-md:flex-col text-white '>
          {data.map((item)=> (
            
           <div className='w-[330px] h-[470px] shrink-0 bg-black bg-opacity-50 rounded flex flex-col m-12 relative' key={item.id}>

            <p className='text-xl tracking-wide capitalize m-8 mt-16 leading-8'>{item.Text}</p>
            
            <div className='m-7'>
              <img src="https://s8.uupload.ir/files/frame_58_1ixk.png" alt="" />
            </div>

            <div className='flex flex-row m-7 items-center absolute bottom-4'>
              <img src={item.Img} alt="" className='mr-6' />
              <h1 className='text-lg'>{item.Name}</h1>
            </div>

            <div className='h-[10px] w-[330px] bg-orange-600 bottom-0 absolute'></div>

           </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default FeedBack