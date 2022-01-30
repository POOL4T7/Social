import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions/AuthAction";

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let dispatch = useDispatch();
  const logoutHandler = async () => {
    await dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Social
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {userInfo?.userId ? (
                  <div className="dropdown">
                    <Link
                      className="nav-link"
                      to="#"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userInfo.profileDetails.name[0].toUpperCase()}
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/friends">
                          Friends
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/setting">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link className="nav-link" to="/login">
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
