// Library/Framework imports 

import React from 'react';
// Import Route/Routes for navigating between pages
import { Route, Routes } from 'react-router-dom';
// Import Box from material UI which is essentially a div but with some shading and color
import { Box } from '@mui/material';

// Import from within the App
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    // This box will contain the Navbar and the Routes between pages
    <Box width='400px'>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App