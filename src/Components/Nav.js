import { Link } from "react-router-dom";

export const Nav = ({ user, setUser, currentCategory }) => {
  const handleLogIn = () => {
    if (user === "") {
      setUser({
        username: "grumpy19",
        name: "Paul Grump",
        avatar_url:
          "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
      });
    } else {
      setUser("");
    }
  };

  return (
    <>
      <ul className="Nav">
        <li>
          <button className="Nav__Button" onClick={handleLogIn}>
            {user ? `Sign Out` : `Log In`}
          </button>
        </li>
        <li>
          <Link to="/categories">
            <button className="Nav__Button">
              {" "}
              {currentCategory || `Categories`}
            </button>
          </Link>
        </li>
        <li>
          <Link to="/reviews">
            <button className="Nav__Button">Reviews</button>
          </Link>
        </li>
      </ul>
      <div className="logged">
        {user ? (
          <h1 className="logged">{`logged in as ${user.username}`}</h1>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
