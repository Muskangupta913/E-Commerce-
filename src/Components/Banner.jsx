import React from 'react';


function Banner() {
    
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center font-bold my-[100px]'>
            <div className=' text-xl md:text-2xl  '>
                Learn with us
            </div>
            <h2 className='text-white text-3xl  md:text-4xl  md:p-[24px]'> Grow with us,</h2>
            <div className=' text-[20px] md:text-[25px] md:p-[15px] text-white  '>
                Learn Web Development
                </div>
              
        </div>
        <button className='bg-black my-2 text-white p-3 rounded'>Get Started</button>        
    </div>
  );
}

export default Banner;