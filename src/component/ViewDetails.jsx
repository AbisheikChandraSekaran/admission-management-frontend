import "./ViewDetails.css"
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CourseCard from './CourseCard';

const ViewDetails = () => {
    const location = useLocation();    
    const { item } = location.state || {};
    const collegeId = item._id;
    const [collegeData, setCollegeData] = useState({});
    
    const viewCollege = async () => {
        
        try {
            
            const response = await axios.get(`http://localhost:3000/college/${collegeId}`);
            setCollegeData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
  
    useEffect(() => {
        viewCollege();
    }, []);

    return (
        <div className="view-details">
            <img src={item.image} alt={item.name} />
            <p>Location: {item.location}</p>
            <p>Description: {item.description}</p>
           
            <h2>Courses</h2>
            <div className="course-cards-container">
            {collegeData.courses && collegeData.courses.length > 0 ? (
                collegeData.courses.map((course) => (
                    <CourseCard key={course._id} item={course} college_id={collegeId}/>
                ))
            ) : (
                <p>Loading....</p>
            )}
            </div>
        </div>
    );
};

export default ViewDetails;
