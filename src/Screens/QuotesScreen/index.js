import React from "react";

import "./style.css";

const QuotesScreen = ({allQoute}) => {
    return (
        <div className="container quotes-container">
            <div className="homeez-heading">
                Quotes
            </div>
            {allQoute && allQoute.map((item)=>{return<div key={item?._id} className="card-container">
                <div className="card-content-container">
                    <div className="quotes-text">{item?.info}
                    </div>
                </div>
            </div>})}    
        </div>
    );
};

export default QuotesScreen;
