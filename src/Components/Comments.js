import { useEffect, useState } from "react";
import { getComments } from "../axios/api";
import { timeConverter } from "../utils";

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
            <li className="comments__card">
              <div className="authTime">
                <h3 className="comments__author">{comment.author}</h3>
                <h3 className="comments__time">{timeConverter(comment)}</h3>
              </div>
              <h3 className="comments__body">{comment.body}</h3>
            </li>
          ))}
        </ul>
      </>
    );
  }
};
