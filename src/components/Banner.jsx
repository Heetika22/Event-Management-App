import React from 'react'

export default function Banner() {
  return (
    <div className=' bg-hero-img bg-cover bg-center h-screen flex justify-center items-center'>
        <div className="bg-white bg-opacity-70 rounded-lg md:p-[30px] p-10 text-center m-10 mx-[400px]">
                <div className='p-5'>
                    <h1 className='text-3xl md:text-[40px] font-roboto font-bold'>Plan, Organise, Manage</h1>
                </div>
                <div className=' text-lg md:text-2xl font-semibold'>
                    Discover and join events tailored just for you.
                </div>
        </div>
    </div>
  )
}
