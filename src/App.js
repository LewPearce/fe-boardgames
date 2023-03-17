import "./App.css";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { Review } from "./Components/Review";
import { Reviews } from "./Components/Reviews";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./Components/Categories";

function App() {
  const [user, setUser] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  return (
    <div className="App">
      <div className="headerNav">
        <Header></Header>
        <Nav
          user={user}
          setUser={setUser}
          currentCategory={currentCategory}
        ></Nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/reviews"
          element={
            <Reviews reviewList={reviewList} setReviewList={setReviewList} />
          }
        ></Route>
        <Route path="/reviews/:review_id" element={<Review />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
    </div>
  );
}

export default App;
