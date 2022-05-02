import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import './style/Main.css'
import Home from '../components/Home'
import Profile from '../components/Profile'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from '../components/Detail'

function Main() {  
  return (
    <div className='main'>
        <Router>
        <Navbar />
          <Routes> 
            <Route exact path='' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='detail/:time' element={<Detail />} />
          </Routes>
        </Router>
    </div>
  )
}

export default Main