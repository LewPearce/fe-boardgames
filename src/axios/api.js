import axios from "axios";

const boardgameApi = axios.create({
  baseURL: "https://lews-boardgame-api.onrender.com/api",
});

export const getReviews = (category) => {
  return boardgameApi
    .get("/reviews", { params: { category } })
    .then((response) => {
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

export const postComment = (review_id, newComment) => {
  return boardgameApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((response) => {
      return response.data;
    });
};

export const patchVotes = (review_id, vote) => {
  return boardgameApi.patch(`/reviews/${review_id}`, vote).then((response) => {
    return response.data;
  });
};

export const getCategories = () => {
  return boardgameApi.get("/categories").then((response) => {
    return response.data.categories;
  });
};
