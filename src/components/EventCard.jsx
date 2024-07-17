import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { api_uri } from '../config';

function EventCard({ event, handleRegisterEvent, handleUnregisterEvent, isAuthenticated, context })
{
  const navigate= useNavigate();
  
  const { _id, title, description, date, time, location, category } = event;

  
  const handleUnregistration = async () => {
    console.log('event id'+ _id);
    if (!isAuthenticated) {
      navigate('/Login');
      return;
    }

    try {
      const response = await fetch(`${api_uri}/api/auth/unregister-event/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        handleUnregisterEvent(_id);
      } else {
        console.error('Error unregistering from event:', response.statusText);
      }
    } catch (error) {
      console.error('Error unregistering from event:', error);
    }
  };

  return (
    <div className="flex flex-col justify-between border border-black bg-[#ececf0] p-5 m-5 shadow-md rounded-lg">
      <div className="mb-10">
        <h2 className='text-2xl font-bold mb-5'>{title}</h2>
        <p className='mb-2'>{description}</p>
        <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Category:</strong> {category}</p>
      </div>
      {context === 'authenticated' && (
        <button className="bg-pink-400 p-2 cursor-pointer rounded-md " onClick={()=> handleRegisterEvent(event._id)}>Register</button>
      )}
      {context === 'unauthenticated' && (
        <button className="bg-pink-400 p-2 cursor-pointer rounded-md " onClick={()=> navigate('/SignUp')}>Register</button>
      )}
      {context === 'registered' && (
        <button className="bg-black text-white p-2 cursor-pointer rounded-md " onClick={handleUnregistration}>Unregister</button>
      )}
    </div>
  );
}

export default EventCard;

