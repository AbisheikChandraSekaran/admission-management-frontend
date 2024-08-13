
// import React from 'react';
// import { addItemToWishlist } from '../redux/wishList';
// import {useDispatch} from 'react-redux';

// import { useNavigate } from 'react-router-dom';
// import ViewDetails from './ViewDetails';

// const CollegeItem = (props) => {
//   const{item} = props;
//   const [collegelist,setCollegeList] = useState([]);

//   const dispatch = useDispatch();
//   const handleAdd = () => {
//     dispatch(addItemToWishlist(props.item));
//   };
// const navigate = useNavigate();

//     const handleView = () => {
//       navigate('/viewDetails');
//     };

 

//     return (
//         <div className="college-item">
//             <img src={props.item.image} />
//             <h3>{props.item.name}</h3>
//             <span>{props.item.location}</span>
//             {/* <p>{props.item.description}</p> */}
//             <div className='Buttondiv'>
//             {/* <span>{props.item.tnea_id}</span> */}
//             <button onClick={handleView}>View Details</button>
//             <button onClick={handleAdd}>Add to Wishlist</button>
//             <ViewDetails key={college.id} item={college}
//             </div>
//         </div>
//     );  
// };

// export default CollegeItem;
import React from 'react';
import { addItem } from '../redux/wishListSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setWishlist } from '../redux/wishListSlice';
const CollegeCard = (props) => {
  
  const wishlistcollege = useSelector((state)=>state.wishlist.items)
  const { item } = props;
  const user = useSelector((state)=>state.user);
  const token = user.token

  console.log("==>token", token)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const payload = {
    products: [{
        product_id: props.item.id,
        quantity: 1
    }]}

  const isInWishlist = wishlistcollege.find((el)=>el.id===props.item.id);   //
    const handleAdd = async () =>{
      const res = await axios.post("http://localhost:3000/wishlist",payload,{
        headers:{
          Authorization: `Bearer ${token}`
        }
        
      });
     console.log(res);
    dispatch(addItem(props.item));
    }



  

  const handleView = () => {
    navigate('/viewDetails', { state: { item } });
  };

  return (
    <div className="college-item">
      <img src={props.item.image} />
      <h3>{props.item.name}</h3>
      <span>{props.item.location}</span>
      {/* <p>{props.item.description}</p> */}
      <div className="Buttondiv">
        {/* <span>{props.item.tnea_id}</span> */}
        <button onClick={handleView}>View Details</button>
        {isInWishlist?(
          <Link to="/wishlist">
          <button>Go to Wishlist</button>
          </Link>
        ):(<button onClick={handleAdd}>Add to Wishlist</button>)}
        
      </div>
    </div>
  );
};

export default CollegeCard;