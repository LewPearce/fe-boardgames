import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to="/" className="Header">
        <h1 className="Header">Acoustic Games</h1>
      </Link>
    </>
  );
};
