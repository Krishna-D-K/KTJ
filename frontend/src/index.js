import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './index.css';
import Form from './Components/Form';
import SignIn from './Routes/SignIn';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path='/signin' element={<SignIn />}></Route>
   </Routes>
  </BrowserRouter>
);

