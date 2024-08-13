import "./Wishlist.css"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WishlistCard from './WishlistCard';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const getWishlistItems = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      const res = await axios.get("http://localhost:3000/wishlist", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setWishlistItems(res.data);
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  useEffect(() => {
    getWishlistItems();
  }, []);

  return (
    <div className="MainWishlistOuter">
      {wishlistItems.map((item) => (
        <WishlistCard key={item.collegeId} item={item} wishlistItems={wishlistItems}setWishlistItems={setWishlistItems}/>
      ))}
    </div>
  );
};

export default Wishlist;

