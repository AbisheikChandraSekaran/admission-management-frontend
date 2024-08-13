import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WishlistCard from './WishlistCard';
import { useEffect } from 'react';
import axios from 'axios';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const token = localStorage.getItem('token')
  const[wishlist,setWishlist] = useState([])
  useEffect(()=>{
    if(token){
      getWishlistItems();
    }},[token])

  const getWishlistItems = async () =>{
    const res = await axios.get("http://localhost:3000/wishlist",{
      headers :{
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(res);
  }
  return (
    <>
      <div className='MainWishlistOuter'>
        <div className='MainWishlist'>
          {wishlistItems.map((item) => (
            <WishlistCard key={item.courseId} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
