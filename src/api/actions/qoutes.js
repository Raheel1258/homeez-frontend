import axios from "axios";
import { url } from "../api";

export const submitQoute = (qoute) => {
  axios
    .post(`${url}api/v1/information/create`, qoute)
    .then((response) => {})
    .catch((err) => {});
};

export const getAllQoute = (handleAllQoute) => {
  axios
    .get(`${url}api/v1/information/all`)
    .then((response) => {
      handleAllQoute(response?.data?.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
