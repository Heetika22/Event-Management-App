import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function Header() {
    const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[#241b23] p-4 '>
        <div className='max-w-[1240px] py-[10px] mx-auto items-center flex justify-between '>
            <div className='duration-300 leading-loose text-3xl font-playwrite font-bold
                            bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text'>
                Event Manager
            </div>
            {
                !toggle ?
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            
            }
            <ul className='hidden md:flex text-xl  gap-10 text-white'>
                <li>
                    <Link to="/" className="hover:bg-white hover:text-pink-500  font-bold p-2 rounded-xl">Explore Events</Link>
                </li>

                <li>
                    <Link to="/" className="hover:bg-white hover:text-pink-500 p-2  font-bold rounded-xl">Browse Events</Link>            
                </li>

                <li>
                    <Link to="/" className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">About Us</Link>      
                </li>
                
                <li>
                    <Link to="/" className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">Sign Up</Link>
                </li>
            </ul>
            {/* Responsive Design */}
            <ul className={`md:hidden text-xl text-white fixed left-0 top-[86px] bg-[#241b23] w-full h-screen transition-transform duration-300 
                 ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                <li className='p-5'>
                    <Link to="/" className="hover:bg-white hover:text-pink-500 p-2">Explore Events</Link>
                </li>

                <li className='p-5'>
                    Browse Events
                </li>

                <li className='p-5'>
                    About Us
                </li>

                <li className='p-5'>
                    Sign Up
                </li>
            </ul>
        </div>
    </div>
  )
}
