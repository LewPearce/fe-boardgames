import { useEffect } from "react";
import { getReviews } from "../axios/api";
import { Link, useParams } from "react-router-dom";

export const Reviews = ({ reviewList, setReviewList }) => {
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((reviews) => {
      setReviewList(reviews);
    });
  }, [category, setReviewList]);

  return (
    <>
      <ul className="review__list">
        {reviewList.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`} className="Link">
                <section className="review__card">
                  <h2 className="review__title"> {review.title}</h2>
                  <img
                    src={review.review_img_url}
                    alt={`${review.title}`}
                    className="review__img"
                  ></img>
                  <h3 className="review__votes">{review.votes} votes</h3>
                  <h3 className="review__comments">
                    {review.comment_count} comments
                  </h3>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
