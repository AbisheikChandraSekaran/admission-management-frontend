import React, { useState } from 'react'
import College from './component/College'
import Header from './component/Header'
import AddCollegeForm from './component/AddCollegeForm';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from './component/HomeLayout'
import Wishlist from './component/Wishlist';
import Login from "./component/Login"
import Register from './component/Resgister'
import { ToastContainer, toast } from 'react-toastify';
import ViewDetails from './component/ViewDetails'



const App = () => {
    
  return (
   
      
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/addcollege" element={<AddCollegeForm />}></Route>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<College/>} />
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/viewDetails" element={<ViewDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  
);
};


export default App