import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/users.slice";

const Form = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInput = useRef();
  const passwordInput = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const headers = { "Content-Type": "application/json" };

    const data = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    //Récupérer firstname lastname dans l'email
    let firstName = data.email.split("@")[0];
    let lastName = data.email.split("@")[1];
    lastName = lastName.split(".")[0];
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    axios
      .post("http://localhost:3001/api/v1/user/login", data, {
        headers: headers,
      })

      .then((res) => {
        console.log(res);
        dispatch(
          loginUser([res.data.body.token, data.email, firstName, lastName])
        );
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <div className="input-wrapper">
        <label>Email</label>
        <input type="text" id="username" ref={emailInput} />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input type="password" id="password" ref={passwordInput} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label>Remember me</label>
      </div>

      <input
        type="submit"
        className={"sign-in-button submit-btn-login"}
        value="Sign-in"
      />
    </form>
  );
};

export default Form;
