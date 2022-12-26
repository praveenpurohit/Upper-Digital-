import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './pages/Navigation/Navigation';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';


function App() {
  return (
<>
<Navigation />
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/portfolio' element={<Portfolio/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>
</>
  );
}

export default App;


