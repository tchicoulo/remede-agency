import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Form = () => {
  return (
    <form>
      <div className="input-wrapper">
        <label>Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label>Remember me</label>
      </div>

      <NavLink to="./user.html">
        <Button className={"sign-in-button"} name={"Sign-In"} />
      </NavLink>
    </form>
  );
};

export default Form;
