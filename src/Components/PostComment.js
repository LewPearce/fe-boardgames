import { useState } from "react";
import { postComment } from "../axios/api";

export const PostComment = ({ review_id, user, setComments }) => {
  const [newComment, setNewComment] = useState("");
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, {
      body: newComment,
      username: user.username,
    }).then(({ new_comment }) => {
      setComments((currComments) => [new_comment, ...currComments]);
      setNewComment("");
    });
  };

  // DISABLE COMMENT BOX IF NOT LOGGED IN

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          className="comment__input"
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          value={newComment}
        ></textarea>
        <button>Submit comment</button>
      </form>
    </>
  );
};
