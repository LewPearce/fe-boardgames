import { useEffect, useState } from "react";
import { getReviewById } from "../axios/api";
import { timeConverter } from "../utils";
import { useParams } from "react-router-dom";

export const Review = ({ reviewList, setReviewList }) => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
            <h1 className="single__title"> {currentReview.title}</h1>
            <div className="single__timeUser">
              <h2 className="single__time">{timeConverter(currentReview)}</h2>
              <h2 className="single__user">by {currentReview.owner}</h2>
            </div>
          </div>
          <div className="single__catVote">
            <h2 className="single__votes">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                alt="like"
                className="like"
              ></img>{" "}
              {currentReview.votes} votes{" "}
            </h2>
            <h2 className="single__category">{currentReview.category}</h2>
          </div>
          <div className="imgPara">
            <img
              src={currentReview.review_img_url}
              alt={`${currentReview.title}`}
              className="single__img"
            ></img>
            <p className="single__para">{currentReview.review_body}</p>
          </div>
          <h2 className="single__comments">
            {currentReview.comment_count} comments
          </h2>
        </section>
      </>
    );
  }
};
