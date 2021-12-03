import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useToasts } from 'react-toast-notifications';
import { submitQuote } from "../../api/actions/quotes";

import HomeScreen from "../../Screens/HomeScreen";


const HomeContainer = () => {

  const { addToast } = useToasts();
  const [quote, setQuote] = useState({
    info: ''
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuote(quote, addToast);
  }

  const handleChange = (e) => {
    setQuote({ info: e });
  }

  return (
    <div>
      <HomeScreen handleSubmit={handleSubmit} handleChange={handleChange} navigate={navigate} />
    </div>
  );
};

export default HomeContainer;
