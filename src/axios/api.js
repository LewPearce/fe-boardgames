import axios from "axios";

const boardgameApi = axios.create({
  baseURL: "https://lews-boardgame-api.onrender.com/api",
});

export const getReviews = () => {
  return boardgameApi.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return boardgameApi.get(`/reviews/${review_id}`).then((response) => {
    return response.data.review;
  });
};

export const getComments = (review_id) => {
  return boardgameApi.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data;
  });
};

export const postComment = (review_id) => {
  return boardgameApi
    .post(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data;
    });
};
