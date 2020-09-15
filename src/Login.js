import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();

    // firebase authentication
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };
  const register = e => {
    e.preventDefault();

    // firebase authentication
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch(function(error) {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={require("./images/amazon-logo.png")}
          alt=""
        />
      </Link>

      <div className="login__form">
        <form>
          <h1 className="login__title">Sign in</h1>

          <h5>E-mail</h5>
          <input
            className="login__username"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            className="login__password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          <small>
            By continuing, you agree to Amazon's{" "}
            <a href="https://www.amazon.com.au/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=201374360">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="https://www.amazon.com.au/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=201374350">
              Privacy Notice
            </a>
            .
          </small>
        </p>

        <button className="login__signUpButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
