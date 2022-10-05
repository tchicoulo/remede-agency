import React from "react";
import Button from "../components/Button";
import { useRef } from "react";
import axios from "axios";

const Form = () => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleLogin = () => {
    // e.preventDefault();
    console.log("youhou");

    // axios
    //   .post("http://localhost:3001/api/v1/user/login", {
    //     email: emailInput,
    //     password: passwordInput,
    //   })

    //   .then((res) => {
    //     console.log("ça marche");
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <form>
      <div className="input-wrapper">
        <label>Email</label>
        <input type="text" id="username" ref={emailInput} />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" ref={passwordInput} />
        <label>Remember me</label>
      </div>

      <Button
        className={"sign-in-button"}
        name={"Sign-In"}
        onClick={handleLogin}
      />
    </form>
  );
};

export default Form;
