import { useEffect, useState } from "react";
import { getReviewById, patchVotes } from "../axios/api";
import { timeConverter } from "../utils";
import { useParams } from "react-router-dom";

export const Review = ({ reviewList, setReviewList }) => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [vote, setVote] = useState(0);

  const handleLike = (event) => {
    event.preventDefault();
    if (liked) {
      setLiked(false);
      setVote(-1);
    } else {
      setLiked(true);
      setVote(1);
    }
  };

  useEffect(() => {
    patchVotes(review_id, { inc_votes: vote }).catch((err) => {
      return alert(
        "there was a problem liking this review, please reload the page and try again"
      );
    });
  }, [review_id, vote]);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((review) => {
      setCurrentReview(review);
      setIsLoading(false);
    });
  }, [setCurrentReview, review_id]);

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
              {liked ? (
                <div className="single__votesflex">
                  <img
                    className="vote__icon"
                    src="https://cdn-icons-png.flaticon.com/512/2589/2589054.png"
                  ></img>
                  <h3 className="single__votesText">
                    {currentReview.votes + 1} votes
                  </h3>
                </div>
              ) : (
                <div className="single__votesflex">
                  <img
                    className="vote__icon"
                    src="https://cdn-icons-png.flaticon.com/512/2589/2589197.png"
                  ></img>
                  <h3 className="single__votesText">
                    {currentReview.votes} votes
                  </h3>
                </div>
              )}
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
          <h3 className="single__comments">
            {currentReview.comment_count} comments
          </h3>
        </section>
      </>
    );
  }
};
