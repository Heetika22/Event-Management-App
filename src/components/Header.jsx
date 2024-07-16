import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#241b23] p-4 '>
        <div className='max-w-[1240px] py-[10px] mx-auto items-center flex justify-between border border-black'>
            <div className='text-3xl font-bold'>
                Event Manager
            </div>
            <ul className='text-xl flex gap-10 text-white'>
                <li>
                    Explore Events
                </li>

                <li>
                    Browse Events
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Sign Up
                </li>
            </ul>
        </div>
    </div>
  )
}
