import React, { useState } from 'react'
import College from './component/College'
import Header from './component/Header'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from './component/HomeLayout'
import Wishlist from './component/Wishlist';



const App = () => {
    
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<College/>} />
          <Route path="/cart" element={<Wishlist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
};


export default App