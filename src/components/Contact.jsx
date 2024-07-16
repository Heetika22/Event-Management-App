import React, { useState } from 'react'


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(`${api_uri}/api/auth/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        alert('Message sent successfully');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message');
    }
  };
  return (
    <div className='mt-10 mb-10 mx-5'>
        <div className='text-4xl font-bold text-center mb-10'>Contact Us</div>
        <div className='md:flex flex-row  md:mx-20 '>
            <div className='md:w-1/2  '>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119888.34355222118!2d72.78198835083283!3d18.958278150811607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6a505627b29%3A0x75b7e2db1bfb63c1!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625842153427!5m2!1sen!2sin"
                    className='h-[435px] w-full'
                    allowFullScreen='lazy'
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className='md:w-1/2 '>              
                <form className=' sm:mx-5'>
                    <div className='md:flex  '>
                        <input 
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='border border-gray-400 rounded-xl  p-2 m-2 w-full md:flex-1'
                        />
                        <input 
                            type='email'
                            placeholder='E-mail'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='border border-gray-400 rounded-xl p-2 m-2 w-full md:flex-1'
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className='border border-gray-400 rounded-xl w-full p-2 m-2'
                    />
                    <textarea
                        rows={10}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='border border-gray-400 rounded-xl w-full p-2 m-2'
                    />
                    <button type="submit" className='bg-blue-600 rounded-lg font-semibold w-full p-2 m-2'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
