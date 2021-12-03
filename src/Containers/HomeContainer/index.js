import React, {useState} from "react";
import { useNavigate } from "react-router";
import { submitQoute } from "../../api/actions/qoutes";
import HomeScreen from "../../Screens/HomeScreen";


const HomeContainer = () => {

  const [qoute , setQoute ] = useState({
    info:''
  });
    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        e.preventDefault();
        submitQoute(qoute);
    }

    const handleChange = (e) => {
        setQoute({info:e});
    }
    
  return (
    <div>
      <HomeScreen handleSubmit={handleSubmit} handleChange={handleChange} navigate={navigate}/>
    </div>
  );
};

export default HomeContainer;
