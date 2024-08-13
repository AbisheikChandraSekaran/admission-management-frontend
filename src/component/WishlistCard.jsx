// import React from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem } from '../redux/wishListSlice';
// import "./WishlistCard.css"

// const WishlistCard = (props) => {
//   const { item } = props;
//   console.log("==>items", item)
//   const token = useSelector((state) => state.user.token);
//   const dispatch = useDispatch();

//   const handleRemoveFromWishlist = async () => {
//     try {
//       const res = await axios.delete(`http://localhost:3000/wishlist/${item.courseId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       dispatch(removeItem(item.courseId));
//       console.log("Removed from wishlist:", res.data);
//     } catch (error) {
//       console.error("Error removing item from wishlist:", error);
//     }
//   };

//   return (
  
//     <>
//     <div className="wishlist-card">
//       <div className="wishlist-card-college">{item.college_name}</div>
//       {item.courses.map((course) => (
//         <div key={course.course_id} className="wishlist-card-course">
//           <div className="wishlist-card-img">
//             <img src={course.course_image} alt={course.course_name} width={50} />
//           </div>
//           <div className="wishlist-card-details">
//             <div className="wishlist-card-title">{course.course_name}</div>
//             <div className="wishlist-card-description">{course.course_description}</div>
//             <div className="wishlist-card-description">₹ {course.course_fee}</div>
//             <div className="wishlist-card-actions">
//               <button onClick={() => handleRemoveFromWishlist(course.course_id)}>Remove</button>
//               {/* Add other actions like "Move to Cart" here */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </>
//   );
// };

// export default WishlistCard;


import React from 'react';
import axios from 'axios';
import "./WishlistCard.css";

const WishlistCard = ({ item ,wishlistItems,setWishlistItems }) => {
  const token = localStorage.getItem('token');
  // console.log(item.collegeId._id)
  console.log(item.courses)

  const handleRemoveFromWishlist = async (collegeId, courseId) => {
   console.log(collegeId)
   console.log(courseId)
    try {
        const token = localStorage.getItem('token');
        const res = await axios.delete('http://localhost:3000/wishlist', {
            data: { collegeId, courseId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        setWishlistItems(prevwishlistItems => {
          return prevwishlistItems.map(college => {
            if (college.college_id === collegeId) {
              const updatedCourses = college.courses.filter(course => course.course_id !== courseId);
              if (updatedCourses.length === 0) {
                return null; 
              }
              return { ...college, courses: updatedCourses };
            }
            return college;
          }).filter(college => college !== null);
        });

        console.log("Removed from wishlist:", res.data);
        // You may want to update your local state here to reflect the changes on the frontend
    } catch (error) {
        console.error("Error removing item from wishlist:", error);
    }
};


  return (
    <div className="wishlist-card">
      <div className="wishlist-card-college">{item.collegeId.name}</div>
      {item.courses.map((course) => (
        <div key={course._id} className="wishlist-card-course">
          <div className="wishlist-card-img">
            <img src={course.course_image} alt={course.course_name} width={50} />
          </div>
          <div className="wishlist-card-details">
            <div className="wishlist-card-title">{course.name}</div>
            <div className="wishlist-card-description">{course.description}</div>
            <div className="wishlist-card-description">₹ {course.course_fee}</div>
            <div className="wishlist-card-actions">
            <button onClick={() => handleRemoveFromWishlist(item.collegeId._id, course._id)}>Remove</button>

              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistCard;
