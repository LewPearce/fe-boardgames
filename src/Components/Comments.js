import { useEffect, useState } from "react";
import { getComments } from "../axios/api";
import { useParams } from "react-router-dom";

export const Comments = ({ setComments, review_id, comments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((review) => {
      setComments(review.comments);
      setIsLoading(false);
    });
  }, [setComments, review_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <ul className="comment__list">
          {comments.map((comment) => (
            <li className="comments">{comment.body}</li>
          ))}
        </ul>
      </>
    );
  }
};
