import { useState , useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Browse from './components/Browse'
import BrowseEvents from './components/BrowseEvents'
import CreateEvent from './components/CreateEvent'
import RegisteredEvents from './components/RegisteredEvents'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { api_uri } from './config'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId]= useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token validity
      fetch(`${api_uri}/api/auth/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Token verification failed');
        })
        .then(data => {
          setIsAuthenticated(true);
          setUsername(data.username);
          setUserId(data.userId);
        })
        .catch(error => {
          console.error('Token verification error:', error);
          setIsAuthenticated(false);
          <Navigate to="/" />;
        });
    }
  }, []);

  const handleLogin = async (userData) => {
    localStorage.setItem('token', userData.token);
    setIsAuthenticated(true);
    setUsername(userData.username); 
    setUserId(userData.id);
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('userId', userData.id)
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userId');
  };


  console.log('isAuthenticated:', isAuthenticated);
  console.log('username:', username);
  console.log('token:', localStorage.getItem('token'));

  return (
    <>
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} username={username}  onLogout={handleLogout}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Contact' element={<Contact />} />
            {/* Pass isAuthenticated, username, handleLogin, and handleLogout as props to Login component */}
            <Route path='/Login' element={<Login isAuthenticated={isAuthenticated} username={username} onLogin={handleLogin} />} />
            <Route path='/CreateEvent' element={<CreateEvent isAuthenticated={isAuthenticated} />} />
            <Route path='/BrowseEvent' element={<BrowseEvents isAuthenticated={isAuthenticated} username={username}  />} />
            <Route path='/Browse' element={<Browse isAuthenticated={isAuthenticated} username={username} />} />
            <Route path='/RegisteredEvents' element={<RegisteredEvents  />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
