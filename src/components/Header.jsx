import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';


export default function Header({ isAuthenticated, username, onLogout }) {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const handleLogout = () => {
        onLogout();
        navigate('/'); 
    };

  return (
    <div className='bg-[#241b23] p-4 '>
        <div className='max-w-[1240px] py-[10px] mx-auto items-center flex justify-between '>
            {( isAuthenticated ?
                <div className='duration-300 leading-loose text-3xl font-playwrite font-bold
                bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text sm:max-width-[50px]'>
                     <span className='block sm:inline-block '>Welcome,</span> 
                     <span className='block sm:inline-block'>{username}</span>
                </div>
                :
                <Link to='/'>
                <div className='duration-300 leading-loose text-3xl font-playwrite font-bold
                            bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text'>
                         Event Manager
                 </div>
                </Link>
            )}
           
            {
                !toggle ?
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block '/>
            
            }

            <ul className='hidden md:flex text-xl  gap-10 text-gray-300'>
                { !isAuthenticated ?
                    (<li onClick={() => navigate('/Browse')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">
                        Explore Events
                    </li>)
                    :
                    (<li onClick={() => navigate('/BrowseEvent')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">
                        Browse Events
                    </li>)

                }
                
                {!isAuthenticated && (
                    <li onClick={() => navigate('/Contact')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">
                        Contact Us          
                    </li>
                )}

                {isAuthenticated && (
                    <li onClick={() => navigate('/CreateEvent')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl"> 
                        Create Event
                    </li>
                )}

                {isAuthenticated && (
                  <li onClick={() => navigate('/RegisteredEvents')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">
                    Registered Events
                  </li>
                )}

                {isAuthenticated && (
                  <li onClick={() => navigate('/RegisteredEvents')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">
                    Edit Events
                  </li>
                )}

                {isAuthenticated?
                    (
                        <li onClick={handleLogout} className="hover:bg-white hover:text-pink-500 p-2 font-bold rounded-xl cursor-pointer">
                            Logout
                        </li>
                    )
                    :
                    (
                        <li onClick={() => navigate('/SignUp')} className="hover:bg-white hover:text-pink-500 p-2 font-bold  rounded-xl">
                            Sign Up
                        </li>
                    )
                }

            </ul>
            {/* Responsive Design */}
            <ul className={`md:hidden text-xl text-white fixed left-0 ${window.innerWidth >= 640 ? 'top-[86px]' : 'top-[98px]'} bg-[#241b23] w-full h-screen transition-transform duration-300 
                 ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                { !isAuthenticated ?
                    (<li onClick={() => navigate('/Browse')} className="hover:bg-white hover:text-pink-500 p-5  rounded-xl">
                        Explore Events
                    </li>)
                    :
                    (<li onClick={() => navigate('/BrowseEvent')} className="hover:bg-white hover:text-pink-500 p-5  rounded-xl">
                        Browse Events
                    </li>)

                }
                

                {!isAuthenticated && (
                    <li onClick={() => navigate('/Contact')} className="hover:bg-white hover:text-pink-500 p-5 rounded-xl">
                        Contact Us          
                    </li>
                )}

                {isAuthenticated && (
                    <li onClick={() => navigate('/CreateEvent')} className="hover:bg-white hover:text-pink-500 p-5 rounded-xl"> 
                        Create Event
                    </li>
                )}

                {isAuthenticated && (
                  <li onClick={() => navigate('/RegisteredEvents')} className="hover:bg-white hover:text-pink-500 p-5 rounded-xl">
                    Registered Events
                  </li>
                )}

                {isAuthenticated?
                    (
                        <li onClick={handleLogout} className="hover:bg-white hover:text-pink-500 p-5 rounded-xl cursor-pointer">
                            Logout
                        </li>
                    )
                    :
                    (
                        <li onClick={() => navigate('/SignUp')} className="hover:bg-white hover:text-pink-500 p-5  rounded-xl">
                            Sign Up
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}
