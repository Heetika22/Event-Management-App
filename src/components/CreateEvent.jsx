import React, { useState } from 'react';
import { api_uri } from '../config';
import { Link } from 'react-router-dom';

export default function CreateEvent({isAuthenticated}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    capacity: '',
    registrationDeadline: '',
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
    try {
        const token = localStorage.getItem('token'); 

        if (!token) {
            console.error('Authorization token is missing');
            return; 
        }

        const response = await fetch(`${api_uri}/api/auth/createEvent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);

        setFormData({
            title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            category: '',
            capacity: '',
            registrationDeadline: ''
        });
    } catch (error) {
        console.error('Error:', error);
    }
};
  return (
    <>
      <div className='bg-form-bg bg-cover bg-center flex items-center justify-center p-10  '>
        <div className='flex flex-col bg-white bg-opacity-75 rounded-xl max-w-3xl w-full p-3 m-5'>
            <div className='text-center font-bold text-3xl mt-5 mb-5'>Create Event </div>
            <form onSubmit={handleSubmit} className='md:p-5'>
            <div className="form-group">
              <label htmlFor="title">Enter Event Title:</label><br/>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full mb-5'
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Enter Event Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Event Description"
                value={formData.description}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full mb-5'
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="date">Enter Event Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Event Date"
                value={formData.date}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full mb-5'
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Enter Event Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Event Time"
                value={formData.time}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full mb-5'
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Enter Event Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Event Location"
                value={formData.location}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full mb-5'
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Enter Event Category:</label>
              <select name='category' value={formData.category} onChange={handleChange} className='border border-gray-400 rounded-xl  p-2  w-full mb-5' >
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Networking">Networking</option> 
                <option value="Art Exhibition">Art Exhibition</option> 
                <option value="Retreat">Retreat</option> 
                <option value="Party">Party</option> 
             </select>
            </div>
            <div className="form-group">
              <label htmlFor="capacity">Enter Event Capacity:</label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                placeholder="Event Capacity"
                value={formData.capacity}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full mb-5'
              />
            </div>
            <div className="form-group">
              <label htmlFor="registrationDeadline">Enter Registration Deadline:</label>
              <input
                type="date"
                id="registrationDeadline"
                name="registrationDeadline"
                placeholder="Registration Deadline"
                value={formData.registrationDeadline}
                onChange={handleChange}
                className='border border-gray-400 rounded-xl  p-2  w-full'
              />
            </div>
            <button type="submit" className='bg-black text-white rounded-xl w-full mt-5 p-3 font-semibold'>Create Event</button>
          </form><br />
        </div>
      </div>
    </>
  )
}
