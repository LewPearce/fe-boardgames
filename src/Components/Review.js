import { useEffect, useState } from "react";
import { getReviewById } from "../axios/api";
import { timeConverter } from "../utils";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";
import { PostComment } from "./PostComment";

export const Review = ({ reviewList, setReviewList }) => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [wantComments, setWantComments] = useState(false);
  const [comments, setComments] = useState([]);

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
            <h3 className="single__votes">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                alt="like"
                className="like"
              ></img>{" "}
              {currentReview.votes} votes{" "}
            </h3>
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
            <div>
              <PostComment></PostComment>
              <Comments
                setComments={setComments}
                review_id={review_id}
                comments={comments}
              />
            </div>
          ) : null}
        </section>
      </>
    );
  }
};
