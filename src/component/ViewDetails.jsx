import React from 'react';
import { useLocation } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import axios from 'axios';

const ViewDetails = () => {
    const location = useLocation();    
    const {item} =location.state || {};
    const [collegeData,setCollegeData] = useState({});

    const viewCollege = async () => {
      try {
        const collegeId = item._id;
        const response = await axios.get(`http://localhost:3000/getcolleges/`+ collegeId );
        setCollegeData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      viewCollege();
    }, []);
  return (
    <div>
      <img src={item.image}/>
      <p>Location: {item.location}</p>
      <p>Description: {item.description}</p>
      <h2>Courses</h2>
        {collegeData.courses && collegeData.courses.length > 0 ? (
          collegeData.courses.map((course) => (
            <div key={course._id}>
              <h3>{course.name}</h3>
              <p>Description: {course.description}</p>
              <p>Duration: {course.duration}</p>
              <p>Course Fee: {course.course_fee}</p>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    );
};
      {/* <button onClick={viewCourse}>View Course Deatils</button>
      {courseData && (
        <div>
          <h2>Course Details</h2>
          <p>Name: {courseData.name}</p>
          <p>Description: {courseData.description}</p>
          
        </div>
      )}
    </div>
  );
}; */}

export default ViewDetails;