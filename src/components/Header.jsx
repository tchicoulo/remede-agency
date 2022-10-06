import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/users.slice";

const Header = () => {
  let isConnected = useSelector((state) => state.users.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={require("../assets/img/argentBankLogo.png")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isConnected ? (
          <NavLink
            className="main-nav-item"
            onClick={() => dispatch(logoutUser())}
            to="/"
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
