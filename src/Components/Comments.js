import { useEffect, useState } from "react";
import { getComments } from "../axios/api";
import { useParams } from "react-router-dom";

export const Comments = ({ setComments, review_id, comments }) => {
  useEffect(() => {
    getComments(review_id).then((review) => {
      setComments(review.comments);
    });
  }, [setComments, review_id]);

  return (
    <>
      <ul className="comment__list">
        <li></li>
        {comments.map((comment) => (
          <li className="comments">{comment.body}</li>
        ))}
      </ul>
    </>
  );
};
