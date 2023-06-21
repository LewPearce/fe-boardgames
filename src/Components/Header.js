import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to="/reviews" className="Header">
        <h1>Acoustic Games</h1>
      </Link>
    </>
  );
};
