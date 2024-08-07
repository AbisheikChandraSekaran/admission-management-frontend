// 

import React from "react";
import { COLLEGES } from "../constant";
import CollegeItem from "./CollegeItem";
import "../App.css"

const College = () => {
    return (
        <div className="college">
            {COLLEGES.map((college) => (
                <CollegeItem
                    key={college.id}
                    item ={college}
                />
            ))}
        </div>
    );
};

export default College;
