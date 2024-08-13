import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/wishListSlice';
import "./WishlistCard.css"

const WishlistCard = (props) => {
  const { item } = props;
  console.log("==>items", item)
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/wishlist/${item.courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(removeItem(item.courseId));
      console.log("Removed from wishlist:", res.data);
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    // <>
    //   <div className="wishlist-card">
    //     <div className="wishlist-card-img">
    //       <img src={item.image} alt={item.courseName} width={50} />
    //     </div>
    //     <div className="wishlist-card-details">
    //       <div className="wishlist-card-college">{item.college_name}</div>
    //       <div className="wishlist-card-title">{item.course_name}</div>
    //       <div className="wishlist-card-actions">
    //         <button onClick={handleRemoveFromWishlist}>Remove</button>
    //         {/* Add other actions like "Move to Cart" here */}
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
    <div className="wishlist-card">
      <div className="wishlist-card-college">{item.college_name}</div>
      {item.courses.map((course) => (
        <div key={course.course_id} className="wishlist-card-course">
          <div className="wishlist-card-img">
            <img src={course.course_image} alt={course.course_name} width={50} />
          </div>
          <div className="wishlist-card-details">
            <div className="wishlist-card-title">{course.course_name}</div>
            <div className="wishlist-card-description">{course.course_description}</div>
            <div className="wishlist-card-description">₹ {course.course_fee}</div>
            <div className="wishlist-card-actions">
              <button onClick={() => handleRemoveFromWishlist(course.course_id)}>Remove</button>
              {/* Add other actions like "Move to Cart" here */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default WishlistCard;
