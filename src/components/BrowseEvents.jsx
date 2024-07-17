import React, { useState, useEffect } from 'react'
import EventCard from './EventCard';
import { api_uri } from '../config';

export default function BrowseEvents({ isAuthenticated, username}) {

  const userId = localStorage.getItem('userId');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    if (isAuthenticated && userId) {
      fetchEvents();
    }
  }, [isAuthenticated, userId]);

  const fetchEvents = async () => {
    try {
      let response;
      if (isAuthenticated && userId) {
        response = await fetch(`${api_uri}/api/auth/unregistered-events/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      } else {
        response = await fetch(`${api_uri}/api/auth/events`);
      }
      const data = await response.json();
      setEvents(data);
      setFilteredEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }

  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterEvents(e.target.value, categoryFilter); 
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
    filterEvents(searchTerm, e.target.value);
  };

  const filterEvents = (searchTerm, category) => {
    let filtered = events;
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter(event => event.category === category);
    }
    setFilteredEvents(filtered);
  };

  const handleRegisterEvent = async (eventId) => {
    try {
      const response = await fetch(`${api_uri}/api/auth/register-event/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      if (response.ok) {
        console.log("In handleRegisterEvent");
        fetchEvents();
      } else {
        console.log('Failed to register for event');
      }
    } catch (error) {
      console.error('Error registering for event:', error);
    }
  };
  
  return (
    <>
      <div className='mt-10 px-20 justify-center items-center'>
        <div className='font-bold text-3xl mb-10 text-center'>Browse Events</div>
        <div className='md:flex justify-between mb-10 md:w-full sm:items-center'>
            <input className='border border-black rounded-lg  p-2 md:w-1/4 m-5'
              type="text"
              placeholder="Search Events"
              value={searchTerm}
              onChange={handleSearch}
            />
            <select onChange={handleCategoryFilter} className='border border-black rounded-lg md:w-1/4 p-2 m-5' >
              <option value="">All Categories</option>
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
              <option value="Networking">Networking</option> 
              <option value="Art Exhibition">Art Exhibition</option> 
              <option value="Retreat">Retreat</option> 
              <option value="Party">Party</option> 
            </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  '>
          {filteredEvents.map(event => (
              <EventCard key={event._id} event={event} handleRegisterEvent={handleRegisterEvent} isAuthenticated={isAuthenticated} context= 'authenticated'/>
          ))}
        </div>
      </div>
    </>
  )
}
