import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <NavLink to="./user.html">
  <Button className={"sign-in-button"} name={"Sign-In"} />
</NavLink>; */
}
