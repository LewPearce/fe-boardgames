import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://lews-boardgame-api.onrender.com/api/reviews")
    .then((response) => {
      return response.data;
    });
};
