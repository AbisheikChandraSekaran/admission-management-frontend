
import React from 'react';
import { addItem } from '../redux/wishList';
import {useDispatch} from 'react-redux';

const CollegeItem = (props) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addItem(props.item));
  };

    return (
        <div className="college-item">
            <img src={props.item.image} />
            console.log({props.image});
            <h3>{props.item.name}</h3>
            <span>{props.item.location}</span>
            <p>{props.item.description}</p>
            <div className='AddtoWishlistdiv'>
            <span>{props.item.tnea_id}</span>
            <button onClick={handleAdd}>Add to Wishlist</button>
            </div>
        </div>
    );  
};

export default CollegeItem;
