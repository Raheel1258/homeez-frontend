import React, {useEffect , useState} from "react";
import { getAllQoute } from "../../api/actions/qoutes";
import QuotesScreen from "../../Screens/QuotesScreen";

const QuotesContainer = () => {

  const [allQoute , setAllQoute] = useState('');

  const handleAllQoute = (res) => {
    setAllQoute(res);

  }

  useEffect(()=> {
    getAllQoute(handleAllQoute);
  },[])

  return (
    <div>
      <QuotesScreen allQoute={allQoute}/>
    </div>
  );
};

export default QuotesContainer;
