import { useEffect, useState } from "react";
import { postComment } from "../axios/api";

export const PostComment = (review_id) => {
  const [newComment, setNewComment] = useState("");

  postComment(review_id, { body: "I love this game so much!" }).then(
    (response) => {
      console.log(response);
    }
  );

  return (
    <>
      <form>
        <textarea className="comment__input" value={newComment}
          onChange = {handleChange}>
        </textarea>
      </form>
    </>
  );
};
