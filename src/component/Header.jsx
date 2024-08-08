import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const collegeItem = useSelector((state)=>state.wishlist.items);
  
  return (
    <header className="header">
      <span>Logo</span>
      <nav className="nav-links">
        <Link to='/'>College</Link>
        <span>About</span>
        <Link to='/wishlist'>Wishlist: {collegeItem.length}</Link>
        
      </nav>
    </header>
  
  )
}

export default Header