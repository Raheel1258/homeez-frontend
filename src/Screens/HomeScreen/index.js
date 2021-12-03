import React from "react";

import "./style.css";

const HomeScreen = () => {
    return (
        <div className="container ">
            <div className="homeez-heading">
                HOMEEEZ
            </div>
            <textarea className="text-area-input" tabIndex="1" rows="2" cols="50" placeholder="Enter Your Quote..."/>
            <div  className="all-quotes">See All Quotes</div>
            <div className="button-container">
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default HomeScreen;
