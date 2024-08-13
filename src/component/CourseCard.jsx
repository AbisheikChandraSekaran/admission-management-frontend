
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import axios from 'axios';
// // import { addItem} from '../redux/wishListSlice'; // Import the addItemToWishlist action
// // import "./CourseCard.css";

// // const CourseCard = (props) => {
// //   const token =  localStorage.getItem('token')
// //   // const{item}=props
// //   console.log("==>props",props)

// //   console.log("==>collegeId",props.college_id)
// //   console.log('==>item id',props.item._id)

// //   console.log("==>token in CourseCard",token)
// //   const wishlistItems = useSelector((state) => state.wishlist.items); // Get wishlist items from Redux store
// //   const dispatch = useDispatch();
  
  
// //   const isInWishlist = wishlistItems.find((el) => el.courseId === props.item._id);



// //   // const handleAdd = async () => {
// //   //   try {
// //   //     const response = await axios.post("http://localhost:3000/wishlist", payload, {
// //   //       headers: {
// //   //         Authorization: `Bearer ${token}` // Assuming the token is stored in localStorage
// //   //       }
// //   //     });
// //   //     console.log('Added to wishlist:', response.data);
// //   //     // Dispatch the action to add the item to the wishlist in Redux
// //   //     dispatch(addItem(props.item));

// //   //     console.log('Added to wishlist:', response.data);
// //   //   } catch (error) {
// //   //     console.log(error);
// //   //   }
// //   // };


// //   const handleAdd = async () => {
    
// //     try {
// //       const payload = {
// //         collegeId: props.college_id,    
// //         courseId: (props.item._id)
        
// //       };
// //       console.log(payload);
    
// //       const token = localStorage.getItem('token');

      
// //       const res = await axios.post('http://localhost:3000/wishlist',payload,{
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       console.log('Added to wishlist:', res.data);
// //     } catch (error) {
// //       console.error('Error adding to wishlist:', error);
// //     }
// //   };
// //   return (
// //     <div className='course-card-container'>
// //       <div className="course-card">
// //         <img src={props.item.image} alt={props.item.name} />
// //         <h3>{props.item.name}</h3>
// //         <p>{props.item.description}</p>
// //         <span>Duration: {props.item.duration}</span>
// //         <span>Course Fee: ₹ {props.item.course_fee}</span>
// //         <div>
// //           {isInWishlist ? (
// //             <button disabled>Already in Wishlist</button>
// //           ) : (
// //             <button onClick={handleAdd}>Add to Wishlist</button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseCard;


// import React from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from '../redux/wishListSlice'; // Import the addItem action
// import "./CourseCard.css";

// const CourseCard = (props) => {
//   const token = localStorage.getItem('token');
//   const wishlistItems = useSelector((state) => state.wishlist.items);
//   const dispatch = useDispatch();

//   const isInWishlist = wishlistItems.find((el) => el.courseId === props.item._id);

//   const handleAdd = async () => {
//     try {
//       const payload = {
//         collegeId: props.college_id,
//         courseId: props.item._id,
//       };
//       console.log("Payload:", payload);

//       const res = await axios.post('http://localhost:3000/wishlist', payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log('Added to wishlist:', res.data);

//       // Update the Redux state with the new wishlist item (if using Redux)
//       dispatch(addItem(res.data)); // Assuming res.data contains the updated wishlist item
//     } catch (error) {
//       console.error('Error adding to wishlist:', error);
//     }
//   };

//   return (
//     <div className='course-card-container'>
//       <div className="course-card">
//         <img src={props.item.image} alt={props.item.name} />
//         <h3>{props.item.name}</h3>
//         <p>{props.item.description}</p>
//         <span>Duration: {props.item.duration}</span>
//         <span>Course Fee: ₹ {props.item.course_fee}</span>
//         <div>
//           {isInWishlist ? (
//             <button disabled>Already in Wishlist</button>
//           ) : (
//             <button onClick={handleAdd}>Add to Wishlist</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/wishListSlice'; // Import the addItem action
import "./CourseCard.css";

const CourseCard = (props) => {
  const token = localStorage.getItem('token');
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const isInWishlist = wishlistItems.find((el) => el.courseId === props.item._id);

  const handleAdd = async () => {
    try {
      const payload = {
        collegeId: props.college_id,
        courseId: props.item._id,
      };
      console.log("Payload:", payload);

      const res = await axios.post('http://localhost:3000/wishlist', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Added to wishlist:', res.data);

      // Update the Redux state with the new wishlist item (if using Redux)
      dispatch(addItem(res.data)); // Assuming res.data contains the updated wishlist item
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  return (
    <div className='course-card'>
      <img src={props.item.image} alt={props.item.name} />
      <h3>{props.item.name}</h3>
      <p>{props.item.description}</p>
      <span>Duration: {props.item.duration}</span>
      <span>Course Fee: ₹ {props.item.course_fee}</span>
      <div>
        {isInWishlist ? (
          <button disabled>Already in Wishlist</button>
        ) : (
          <button onClick={handleAdd}>Add to Wishlist</button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
