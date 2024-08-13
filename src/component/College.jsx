import "./College.css"

import React from "react";
import { useState,useEffect } from "react";
import CollegeCard from "./CollegeCard";
import "../App.css"
import axios from "axios";
import { useSelector } from "react-redux";



const College = () => {
    const [collegeList,setCollegeList] = useState([]);
    useEffect(()=>{
      getColleges() 
    },[]);

    const token = useSelector((state)=>state.user?.token)
    
console.log(token);

   
    const getColleges = async () =>{
        const res = await axios.get("http://localhost:3000/getcolleges")
        setCollegeList(res.data)
        console.log(res.data)
    }
    
    return (
        <div className="college">
            {collegeList.map((college) => (
                <CollegeCard
                    key={college.id}
                    item ={college}
                />
            ))}
        </div>
    );
};

export default College;
