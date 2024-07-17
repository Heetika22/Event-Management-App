import React from 'react'
import Banner from './Banner'
import eventCalendar from '../assets/event-calendar.png'
import featureImage1 from '../assets/feature1.png'; 
import featureImage2 from '../assets/feature2.png';
import featureImage3 from '../assets/feature3.png';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <>
        <Banner />
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={eventCalendar} alt= '' className='inline'/>
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='font-bold my-2 text-black text-xl'>Welcome to our Event Manager application.</h1>
                <p className='my-2 text-justify font-normal'>
                We are dedicated to providing you with the best platform to plan, organize, and manage your events with ease.
                Our team is committed to delivering an exceptional user experience, and we're constantly working on improving our services to meet your needs.
                </p>
                <button className='w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
        <div className='mt-10 mb-10'>
            <div className='text-4xl font-bold text-center mb-10'>Explore Features</div>
            <div className='md:flex flex-row md:gap-10 md:mx-20 ' >
                <div className='flex flex-col border border-black p-5 rounded-xl transition-transform duration-300 transform translate-y-0 hover:-translate-y-2 m-2'>
                    <img src={featureImage1} alt="feature1" className='rounded-lg'/>
                    <h2 className='text-lg text-center font-medium mt-5'>Easy Event Creation</h2>
                    <p className='text-base text-center'>Create events in minutes with our intuitive interface.</p>
                </div>
                <div className='flex flex-col border border-black p-5 rounded-xl transition-transform duration-300 transform translate-y-0 hover:-translate-y-2 m-2'>
                    <img src={featureImage2} alt="feature2" className='rounded-lg'/>
                    <h2 className='text-lg text-center font-medium mt-5'>Discover Events</h2>
                    <p className='text-base text-center'>Find upcoming events based on your interests.</p>
                </div>
                <div className='flex flex-col border border-black p-5 rounded-xl transition-transform duration-300 transform translate-y-0 hover:-translate-y-2 m-2'>
                    <img src={featureImage3} alt="feature3" className='rounded-lg'/>
                    <h2 className='text-lg text-center font-medium mt-5'>Join Events</h2>
                    <p className='text-base text-center'>Register for events you're interested in attending.</p>
                </div>
            </div>
        </div>
        <Contact/>
    </>
  )
}
