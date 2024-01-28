import './App.css'
import  { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle' 

import { Header , Footer  , Colors} from './components/index'
import { Quran , PrayerTimes , About , Projects , Contact , SignIn , SignUp} from './pages/index'

function App() {
  const [pageColor, setPageColor] =  useState(localStorage.getItem('pageColor') || '');

  const handleColorChange = (color) => {
    setPageColor(color);
  };
  useEffect(() => {
    
    localStorage.setItem('pageColor', pageColor);
  }, [pageColor]);

  return (
    <>
      <Router basename={'/'}>
        <Header pageColor={pageColor}/>
        
        <Colors onColorChange={handleColorChange} />

        <div className={`page-content ${pageColor}`}>
        <Routes>
          <Route path='/' element ={<Quran/>} />
          <Route path='/Prayer-Times' element ={<PrayerTimes/>} />
          <Route path='/About' element ={<About/>} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='/projects' element ={<Projects/>} />
          <Route path='/sign-in' element ={<SignIn/>} />
          <Route path='/sign-up' element ={<SignUp/>} />
        
        </Routes>
        </div>
        
        <Footer pageColor={pageColor}/>
      </Router>
      
      
    </>
  )
}

export default App