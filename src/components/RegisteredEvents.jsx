import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { api_uri } from '../config';

function RegisteredEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const userId= localStorage.getItem('userId');
  const isAuthenticated= localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (userId) {
      fetchRegisteredEvents();
    }
  }, [userId]);

  const fetchRegisteredEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${api_uri}/api/auth/registered-events/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch registered events');
      }
      const data = await response.json();
      setRegisteredEvents(data);
    } catch (error) {
      console.error('Error fetching registered events:', error);
    }
  };

  const handleUnregisterEvent = (eventId) => {
    setRegisteredEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
  };
  console.log(userId);
  return (
    <>
    <div className='mt-10 px-20 justify-center items-center'>
      <div className='font-bold text-3xl mb-10 text-center'>Browse Events</div>
      {registeredEvents.length === 0 ? (
              <p>No events registered yet.</p>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  '>
                {registeredEvents.map(event => (
                    <EventCard key={event._id} event={event} handleUnregisterEvent={handleUnregisterEvent} isAuthenticated={isAuthenticated} context= 'registered'/>
                ))}
              </div>
            )}
      </div>
    </>
  );
}

export default RegisteredEvents;
