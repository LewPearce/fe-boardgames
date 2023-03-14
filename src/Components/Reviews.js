import { useEffect } from "react";
import { getReviews } from "../Axios/connections";

export const Reviews = ({ reviewList, setReviewList }) => {
  useEffect(() => {
    getReviews().then((reviews) => {
      setReviewList(reviews);
    });
  }, [setReviewList]);

  const timeConverter = (review) => {
    const months = [
      `Jan`,
      `Feb`,
      `Mar`,
      `Apr`,
      `May`,
      `Jun`,
      `Jul`,
      `Aug`,
      `Sep`,
      `Oct`,
      `Nov`,
      `Dec`,
    ];
    let date = review.created_at.slice(0, 10);
    let monthInd = parseInt(date.slice(5, 7));
    let month = months[monthInd];
    let day = date.slice(8, 10);
    let year = date.slice(0, 4);
    return `${day} ${month} ${year}`;
  };

  return (
    <>
      <ul className="review__list">
        {reviewList.map((review) => {
          return (
            <li key={review.title} >
              <ul className="review__card">
                <li className="review__title"> {review.title}</li>
                <li className="review__time">{timeConverter(review)}</li>
                <li className="review__user">by {review.owner}</li>
                <li className="review__category">{review.category}</li>
                <li className="review__image">
                  <img
                    src={review.review_img_url}
                    alt={`an image of ${review.title}`}
                    className="review__img"
                  ></img>
                </li>
                <li className="review__votes">
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                    alt="like"
                    className="like"
                  ></img> {review.votes} votes{" "}
                
                </li>
                <li className="review__comments">
                  {review.comment_count} comments
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
