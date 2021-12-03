import React from "react";
import "./style.css";

const HomeScreen = ({ handleSubmit, handleChange, navigate }) => {

  return (
    <div className="container contentStyle ">
      <div className="homeez-heading">
        HOMEEEZ
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} >
          <textarea className="text-area-input" name='qoute' onChange={(e) => handleChange(e.currentTarget.value)} tabIndex="1" rows="2" cols="50" placeholder="Enter Your Quote..." />
        </div>
        <div className="all-quotes" onClick={() => (navigate('/qoutes'))}>See All Quotes</div>
        <div className="button-container">
          <button type='submit' className="submit-button" >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HomeScreen;
