import React from 'react'
import Home from './home'
import {Route,Routes, useLocation} from 'react-router-dom';
import Cuisines from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';


export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key = {location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisines />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
      
    
  )
}
