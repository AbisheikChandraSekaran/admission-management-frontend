import React from 'react'

const WishlistCard = (props) => {
    const {item} = props;


  return (
    <>
    <div>
        <div>
            <img src={item.image} alt={item.title} width={50} />
        </div>
        <div>
            <div>{item.title}</div>
            <span>{item.location}</span>
        </div>
        
    </div>
    </>
  )
}

export default WishlistCard