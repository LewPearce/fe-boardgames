import { useState } from "react";
import { postComment } from "../axios/api";

export const PostComment = ({ review_id, user, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [posting, setPosting] = useState(false);
  const [noConnection, setNoConnection] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosting(true);
    postComment(review_id, {
      body: newComment,
      username: user.username,
    })
      .then(({ new_comment }) => {
        setComments((currComments) => [new_comment, ...currComments]);
        setNewComment("");
        setPosting(false);
      })
      .catch(() => {
        setNoConnection(true);
        setPosting(false);
      });
  };

  const handlePopUp = () => {
    setNoConnection(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button className="popup" onClick={handlePopUp}>
          {noConnection
            ? "there was a problem submitting your comment, please reload the page and try again"
            : null}
        </button>

        {posting ? (
          <h2 className="posting">posting your comment...</h2>
        ) : (
          <textarea
            className="comment__input"
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
            value={newComment}
            disabled={!user}
          ></textarea>
        )}

        <button className="single__commentButton" disabled={!user}>
          {user ? "Submit Comment" : "Sign in to post a comment"}
        </button>
      </form>
    </>
  );
};
