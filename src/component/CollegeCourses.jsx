import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegeCourses = ({ collegeId }) => {
    const [college, setCollege] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCoursesForCollege = async (collegeId) => {
            try {
                const response = await axios.get(`/api/colleges/${collegeId}`);
                setCollege(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getCoursesForCollege(collegeId);
    }, [collegeId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>{college.name}</h2>
            <h3>Courses Offered</h3>
            <ul>
                {college.courses.map((course) => (
                    <li key={course.id}>
                        <h4>{course.name}</h4>
                        <p>{course.description}</p>
                        <p>Duration: {course.duration}</p>
                        <p>Course Fee: ${course.course_fee}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeCourses;
