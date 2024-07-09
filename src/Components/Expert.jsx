import React from 'react';
import lap from "../assests/img/lap.jpg"

function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto h-[250px] p-2 my-10  md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%] text-center '>
            <img src= {lap} alt="" className='inline'/>
        </div>
        <div className=' col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2 '> LEARN FROM EXPERT</h1>
            <p className='my-2 text-justify'>
                This is my website where i am using react js and this is scrach website i have used grid where two col span i have used 
            </p>
            <button className='w-[35%] md:w-[45%] bg-black text-white p-3 rounded my-2'>Get Started</button>
        </div>
    </div>
  )
}

export default Expert