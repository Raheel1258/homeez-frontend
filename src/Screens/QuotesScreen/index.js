import React from "react";
import ClipLoader from 'react-spinners/ClipLoader';

import "./style.css";

const QuotesScreen = ({ allQuote }) => {
  return (
    <div className="container quotes-container">
      <div className="homeez-heading">
        Quotes
      </div>
      {allQuote ? allQuote.map((item) => {
        return <div key={item?._id} className="card-container">
          <div className="card-content-container">
            <div className="quotes-text">{item?.info}
            </div>
          </div>
        </div>
      })
        : (
          <div className="card-container">
            <ClipLoader color={'black'} size={25} />
          </div>
        )
      }
    </div>
  );
};

export default QuotesScreen;
