import { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Admin from './components/Admin'; // Import the Admin component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './components/User';



function App() {
  const [count, setCount] = useState(0);

  return (
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} /> 
        <Route path='/user' element={<User />} />
        
      </Routes>
  
  );
}

export default App;


