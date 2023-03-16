import { useEffect, useState } from "react";
import { getReviewById, patchVotes } from "../axios/api";
import { timeConverter } from "../utils";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";

export const Review = ({ reviewList, setReviewList }) => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [wantComments, setWantComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    let vote = 0;
    setLiked((current) => !current);
    liked ? (vote = -1) : (vote = 1);
    patchVotes(review_id, { inc_votes: vote }).catch((err) => {
      alert(
        "there was a problem liking this review, please reload the page and try again"
      );
      setLiked(true);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((review) => {
      setCurrentReview(review);
      setIsLoading(false);
    });
  }, [setCurrentReview, review_id]);

  const handleComments = (event) => {
    event.preventDefault();
    if (wantComments) {
      setWantComments(false);
    } else {
      setWantComments(true);
    }
  };

  if (isLoading) {
    return <h1>LOADING</h1>;
  } else {
    return (
      <>
        <section className="single__card">
          <div className="single__headers">
            <h2 className="single__title"> {currentReview.title}</h2>
            <div className="single__timeUser">
              <h3 className="single__time">{timeConverter(currentReview)}</h3>
              <h3 className="single__user">by {currentReview.owner}</h3>
            </div>
          </div>
          <div className="single__catVote">
            <button onClick={handleLike} className="single__votes">
              <div className="single__votesflex">
                <img
                  alt={liked ? "liked" : "not liked"}
                  className="vote__icon"
                  src={
                    liked
                      ? "https://cdn-icons-png.flaticon.com/512/2589/2589054.png"
                      : "https://cdn-icons-png.flaticon.com/512/2589/2589197.png"
                  }
                ></img>
                <h3>
                  {" "}
                  {liked
                    ? `${currentReview.votes + 1}`
                    : `${currentReview.votes}`}{" "}
                  likes
                </h3>
              </div>
            </button>
            <h3 className="single__category">{currentReview.category}</h3>
          </div>

          <div className="imgPara">
            <img
              src={currentReview.review_img_url}
              alt={`${currentReview.title}`}
              className="single__img"
            ></img>
            <p className="single__para">{currentReview.review_body}</p>
          </div>
          <button onClick={handleComments} className="single__commentButton">
            Show Comments
          </button>
          {wantComments ? (
            <Comments
              setComments={setComments}
              review_id={review_id}
              comments={comments}
            />
          ) : null}
        </section>
      </>
    );
  }
};
