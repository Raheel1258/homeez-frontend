import axios from "axios";
import { url } from "../api";


export const submitQuote = (quote, addToast) => {
  axios
    .post(`${url}api/v1/information/create`, quote)
    .then((res) => {
      addToast('Successfully, Submitted', { appearance: 'success' })
    })
    .catch((err) => {
      addToast('Try Again', { appearance: 'error' })
    });
};

export const getAllQuotes = (handleAllQuote) => {
  axios
    .get(`${url}api/v1/information/all`)
    .then((res) => {
      handleAllQuote(res?.data?.data);
    })
    .catch((err) => {
    });
};
