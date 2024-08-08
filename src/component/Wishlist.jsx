import React from 'react'
import { useSelector } from 'react-redux';
import WishlistCard from './WishlistCard';
const Wishlist = () => {

  const WishlistItem = useSelector((state)=>state.wishlist.items)
  return (
    <div>
      {WishlistItem.map((wishlist)=>(
        <WishlistCard key={wishlist.id} item={Wishlist}/>
      ))}
    </div>
  )
}

export default Wishlist