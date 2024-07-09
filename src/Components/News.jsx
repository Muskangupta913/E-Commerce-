import React from 'react'

function News() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px]">
           <div className='m-2' > 
           <h1 className='text-[30px] md:text-[35px] font-bold text-white'> Want to learn latest I.T skills?</h1>
           <span className='text-white'> Sign Up to our newsletter and stay up to date</span>
           </div>
           <div className='m-2' >
             <input type="text" className='p-4 mb-2 mr-2 text-slate-600 rounded ' placeholder='Email'/>
             <button className='bg-black my-2 text-white p-3 rounded'>Get Started</button>
             <br/>
             <p> we care about the protection of your data. Read our <br/> Privicy Policy</p>
             </div>
        </div>

    </div>
  )
}

export default News