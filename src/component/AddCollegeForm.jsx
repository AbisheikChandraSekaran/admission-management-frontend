// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AddCollegeForm.css'; // Optional, for styling

// const AddCollegeForm = () => {
//   const [courses, setCourses] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [collegeName, setCollegeName] = useState('');
//   const [location, setLocation] = useState('');
//   const [tneaId, setTneaId] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');
//   const [rating, setRating] = useState('');

//   // Fetch courses for the dropdown
//   const token = localStorage.getItem('token');
//   console.log("==>token in Add form",token)
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/courses'); // Adjust the URL as needed
//         console.log(res.data);
//         setCourses(res.data);
//       } catch (error) {
//         console.log(error)
//         console.error('Error fetching courses:', error);
//       }
//     };
   
//     fetchCourses();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3000/college', {
       
//         name: collegeName,
//         location,
//         tnea_id: tneaId,
//         description,
//         image,
//         rating,
//         courses: selectedCourses, // Send array of selected course IDs
//       },{
//         headers :{
//             Authorization: `Bearer ${token}`
//           }
//       });
//       console.log('College added:', res.data);
//       // Clear form or redirect as needed
//     } catch (error) {
//         console.log(error)
//       console.error('Error adding college:', error);
//     }
//   };

//   // Handle course selection
//   const handleCourseChange = (e) => {
//     const { options } = e.target;
//     const selectedIds = Array.from(options)
//       .filter(option => option.selected)
//       .map(option => option.value);
//     setSelectedCourses(selectedIds);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="collegeName">College Name:</label>
//         <input
//           type="text"
//           id="collegeName"
//           value={collegeName}
//           onChange={(e) => setCollegeName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="tneaId">TNEA ID:</label>
//         <input
//           type="text"
//           id="tneaId"
//           value={tneaId}
//           onChange={(e) => setTneaId(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="image">Image URL:</label>
//         <input
//           type="text"
//           id="image"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="rating">Rating:</label>
//         <input
//           type="number"
//           id="rating"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           min="0"
//           max="5"
//           step="0.1"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="courses">Select Courses:</label>
//         <select
//           id="courses"
//           multiple
//           onChange={handleCourseChange}
//           value={selectedCourses}
//         >
//           {courses.map((course) => (
//             <option key={course._id} value={course._id}>
//               {course.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Add College</button>
//     </form>
//   );
// };

// export default AddCollegeForm;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddCollegeForm.css'; // Updated CSS file
import { toast } from 'react-toastify';

const AddCollegeForm = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [collegeName, setCollegeName] = useState('');
  const [location, setLocation] = useState('');
  const [tneaId, setTneaId] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');

  // Fetch courses for the dropdown
  const token = localStorage.getItem('token');
  console.log("==>token in Add form", token);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:3000/courses'); // Adjust the URL as needed
        console.log(res.data);
        setCourses(res.data);
      } catch (error) {
        console.log(error);
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/college', {
        name: collegeName,
        location,
        tnea_id: tneaId,
        description,
        image,
        rating,
        courses: selectedCourses, // Send array of selected course IDs
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success(res.data.message);
      console.log('College added:', res.data);
      // Clear form or redirect as needed
    } catch (error) {
      console.log(error);
      console.error('Error adding college:', error);
      toast.success(res.data.message);
    }
  };

  // Handle course selection
  const handleCourseChange = (e) => {
    const { options } = e.target;
    const selectedIds = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setSelectedCourses(selectedIds);
  };

  return (
    <div className="add-college-container">
      <form className="add-college-form" onSubmit={handleSubmit}>
        <h2>Add College</h2>
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            id="collegeName"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tneaId">TNEA ID:</label>
          <input
            type="text"
            id="tneaId"
            value={tneaId}
            onChange={(e) => setTneaId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courses">Select Courses:</label>
          <select
            id="courses"
            multiple
            onChange={handleCourseChange}
            value={selectedCourses}
          >
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn">Add College</button>
      </form>
    </div>
  );
};

export default AddCollegeForm;
