import React, { useState } from 'react'
import College from './component/College'
import Header from './component/Header'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from './component/HomeLayout'
import Wishlist from './component/Wishlist';
import Login from "./component/Login"
import Register from './component/Resgister'



const App = () => {
    
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<College/>} />
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
};


export default App