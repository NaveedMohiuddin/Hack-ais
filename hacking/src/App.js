import logo from './logo.svg';
import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Timestamp from 'react-timestamp'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';
import Public from './Public';
import Private from './Private';

function App() {
  
  return (
    
    <Router>
    <Routes>
      <Route exact path="/" element={<Public/>} />
      <Route exact path="/Public" element={<Public/>} />

      <Route exact path="/Private" element={<Private/>} />

      
    </Routes>
  </Router>

  );
}

export default App;
