import { useEffect, useState } from "react";
import { getReviewsFromCat } from "../axios/api";
import { Link } from "react-router-dom";

export const Category = ({ reviewList, setReviewList, currentCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getReviewsFromCat(currentCategory).then((reviews) => {
      setCategoryList(reviews);
    });
  }, [currentCategory]);

  return (
    <>
      <ul className="review__list">
        {categoryList.map((categoryRev) => {
          return (
            <li key={categoryRev.review_id}>
              <Link to={`/reviews/${categoryRev.review_id}`} className="Link">
                <section className="review__card">
                  <h2 className="review__title"> {categoryRev.title}</h2>
                  <img
                    src={categoryRev.review_img_url}
                    alt={`${categoryRev.title}`}
                    className="review__img"
                  ></img>
                  <h3 className="review__votes">{categoryRev.votes} votes</h3>
                  <h3 className="review__comments">
                    {categoryRev.comment_count} comments
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
