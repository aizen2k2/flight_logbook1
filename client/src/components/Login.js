import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../App";
const Login = () => {

  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data.token);
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: 'USER', payload: true });
      window.alert("Login Successfull");
      navigate("/");
    }
  };

  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <Link to="/signup" className="signin-image-link">
                Create an account
              </Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Log In</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                  ></input>{" "}
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id=" signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
