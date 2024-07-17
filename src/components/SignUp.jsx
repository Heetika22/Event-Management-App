import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { api_uri } from '../config';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log(formData);
        const response= await fetch(`${api_uri}/api/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const data= await response.json();
        console.log(data);
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          password: '',
        });
        
      };
    
  return (
    <>
    <div className='bg-form-bg bg-cover bg-center h-[90vh] flex items-center justify-center  '>
        <div className='flex flex-col bg-white bg-opacity-75 rounded-xl max-w-lg w-full p-3 m-5'>
            <div className='text-center font-bold text-3xl mt-5 mb-5'>Sign Up </div>
            <form onSubmit={handleSubmit} className='w-full '>
                <div className='flex flex-col items-center'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-xl  p-2 m-2 w-[90%] md:w-[80%]'
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-xl  p-2 m-2 w-[90%] md:w-[80%]'
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-xl  p-2 m-2 w-[90%] md:w-[80%]'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-xl  p-2 m-2 w-[90%] md:w-[80%]'
                    />
                    <button type="submit" className='bg-blue-600 rounded-lg font-semibold p-2 m-2 w-[90%] md:w-[80%] text-white'>Sign Up</button>
                </div>
            </form>
            <div className='text-base text-center'>Already Registered? <Link to='/Login' className='text-cyan-700'>Login Here</Link></div>
        </div>
    </div>
    </>
  )
}

