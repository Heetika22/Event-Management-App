# Event Management System

## Description
Built a full-stack application using React, Express, and MongoDB for managing events. Features include user authentication, event creation, browsing events, and user registration for events. Implemented dynamic event visibility for authenticated and non-authenticated users, enhancing user experience and security.

## Features
- **User Authentication**: Secure user login and registration.
- **Event Creation**: Users can create new events.
- **Browse Events**: All users can browse events. Non-authenticated users see all events, while authenticated users see only unregistered events.
- **User Registration for Events**: Authenticated users can register for events.

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Icons**: react-icons/bs

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Heetika22/Event-Management-App.git
   cd event-management-system
   ```
2. **Install frontend dependencies**:
   ```bash
   cd Event-Management-App
   npm install
   ```
3. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   ```
4. **Set up MongoDB**:
   - Ensure MongoDB is installed and running.
   - Create a database and make changes in db.js file.
  
5. **Configure environment variables**:
   - Create a .env file in the server directory and add the JWT_SECRET
  
##Usage

1. **Start the backend server**:
   ```bash
   cd server
   node index.js
   ```
2. **Start the frontend development server**:
   ```bash
   cd ..
   npm run dev
   ```
