import { useEffect } from "react";
import { getReviews } from "../Axios/connections";

export const Reviews = (reviewList, setReviewList) => {
  //   useEffect(() => {
  //     return getReviews().then((reviews) => {
  //       return setReviewList(reviews.reviews);
  //     });
  //   }, [setReviewList]);

  return (
    <>
      {setReviewList([[1], [2]])}
      {console.log(reviewList)}
      <ul>
        {/* {reviewList.map((review) => {
          return <li>{review.title}</li>;
        })} */}
      </ul>
      <h1>I AM HERE</h1>
    </>
  );
};
