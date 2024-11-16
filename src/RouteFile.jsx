import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Nav-Compo/Home';
import Bollywood from './Nav-Compo/Bollywood';
import Technology from './Nav-Compo/Technology';
import Hollywood from './Nav-Compo/Hollywood';
import Fitness from './Nav-Compo/Fitness';
import Food from './Nav-Compo/Food';
import Details from './Nav-Compo/Details';

const RouteFile = () => {
  return (
    <>

    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Bollywood' element={<Bollywood/>} />
            <Route path='/Technology' element={<Technology/>} />
            <Route path='/Hollywood' element={<Hollywood/>} />
            <Route path='/Fitness' element={<Fitness/>} />
            <Route path='/Food' element={<Food  />} />
            <Route path='/details/:id' element={<Details/>}></Route>
        </Routes>
    </Router>
    </>
)
}

export default RouteFile