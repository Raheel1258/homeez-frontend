import React, { useEffect, useState } from "react";

import { getAllQuotes } from "../../api/actions/quotes";
import QuotesScreen from "../../Screens/QuotesScreen";

const QuotesContainer = () => {

  const [allQuote, setAllQuote] = useState('');

  const handleAllQuote = (res) => {
    setAllQuote(res);
  }

  useEffect(() => {
    getAllQuotes(handleAllQuote);
  }, [])

  return (
    <div>
      <QuotesScreen allQuote={allQuote} />
    </div>
  );
};

export default QuotesContainer;
