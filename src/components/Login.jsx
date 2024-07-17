import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import { api_uri } from '../config';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; 

export default function Login({ isAuthenticated, username, onLogin }) {
    const navigate = useNavigate(); 
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
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
      const response = await fetch(`${api_uri}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        onLogin(data);
        const user = {
          userId: data.id, 
          username: data.username, 
        };
  
        console.log('user:', user);
        console.log('main userID', user.userId);
    
        localStorage.setItem('user', JSON.stringify(user));
      
        console.log('userData:', data); 
        navigate('/BrowseEvent', { state: { userId: data.id } }); 
      } else {
        alert('Login error: Invalid email or password');
      }
    };
    
  
    console.log('isAuthenticated in Login:', isAuthenticated);
    console.log('username in Login:', username);
  
  return (
    <>
    <div className='bg-form-bg bg-cover bg-center h-[90vh] flex items-center justify-center  '>
        <div className='flex flex-col bg-white bg-opacity-75 rounded-xl max-w-lg w-full p-3 m-5'>
            <div className='text-center font-bold text-3xl mt-5 mb-5'>Login </div>
            <form onSubmit={handleSubmit} className='w-full '>
                <div className='flex flex-col items-center'>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-xl  p-2 m-2 w-[90%] md:w-[80%]'
                    />
                    <div className='relative w-[90%] md:w-[80%]'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                        style={{ paddingRight: '40px' }}
                        className='border border-gray-400 rounded-xl p-2 m-2 w-full'
                      />
                      {/* Toggle password visibility icon */}
                      <div
                        className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                        onClick={()=> setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiOutlineEye className='text-gray-400' />
                        ) : (
                          <AiOutlineEyeInvisible className='text-gray-400' />
                        )}
                     </div>
                    </div>
                    <button type="submit" className='bg-blue-600 rounded-lg font-semibold p-2 m-2 w-[90%] md:w-[80%] text-white'>Login</button>
                </div>
            </form>
            <div className='text-base text-center'>Don't have an account? <Link to='/signUp' className='text-cyan-700'>Register Here</Link></div>
        </div>
    </div>
    </>
  )
}
