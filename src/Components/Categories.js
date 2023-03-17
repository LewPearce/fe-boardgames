import { useEffect, useState } from "react";
import { getCategories } from "../axios/api";
import { Link } from "react-router-dom";

export const Categories = ({ setCurrentCategory }) => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategoryList(categories);
    });
  }, [setCategoryList]);
  console.log(categoryList);

  return (
    <>
      <ul className="category__list">
        {categoryList.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`/categories/${category.slug}`} className="Link">
                <section
                  className="category__card"
                  onClick={() => {
                    setCurrentCategory(category.slug);
                  }}
                >
                  <h2 className="category__title"> {category.slug}</h2>
                  <h3 className="category__description">
                    {category.description}
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
