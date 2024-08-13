import React, { useEffect } from 'react'
import "./Header.css"
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWishlist } from '../redux/wishListSlice';
import axios from 'axios';

const Header = () => {
  const wishlistItem = useSelector((state)=>state.wishlist.items);

  console.log("==>College In Header",wishlistItem)
  const token = localStorage.getItem('token')

  const dispatch = useDispatch();

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
    console.log("==>Before Setting to wishlist",res.data);
     
    dispatch(setWishlist(res.data))
    console.log("wishlist after Set",wishlistItem)
  }
  console.log(wishlistItem.length)
  return (
    <header className="header">
      <span>Logo</span>
      <nav className="nav-links">
        <Link to='/'>College</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
        <span>About</span>
        <Link to='/wishlist'>Wishlist: {wishlistItem.length}</Link>
        
      </nav>
    </header>
  
  )
}

export default Header