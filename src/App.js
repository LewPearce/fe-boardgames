import "./App.css";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { Reviews } from "./Components/Reviews";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  return (
    <div className="App">
      <Header></Header>
      <Nav
        user={user}
        setUser={setUser}
        currentCategory={currentCategory}
      ></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/reviews"
          element={
            <Reviews reviewList={reviewList} setReviewList={setReviewList} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
