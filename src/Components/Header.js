import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/" className="Header">
      <h1 className="Header">Boardgames!</h1>
    </Link>
  );
};
