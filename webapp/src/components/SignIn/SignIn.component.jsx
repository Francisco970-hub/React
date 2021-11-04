import React, { useState } from "react";

import Button from "../button/button.component";

import Axios from "axios";

//import { Link } from "react-router-dom";

import { useHistory } from "react-router";

//import { withRouter } from "react-router-dom";

export default function SignIn() {
  
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = async () => {
    await Axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
    });

    const token = localStorage.getItem("token");
    await Axios.get("http://localhost:5000/isUserAuth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.authenticated) {
        history.push("/login");
      } else {
        console.log("User not Authencticated");
      }
    });
  };

  return (
    <div>
    <div className="sign-up">
      <h1>SIGN IN</h1>
      <h2 className="title">I already have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <h3 type="email">Email</h3>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <h3 type="text">Password</h3>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <Button type="button"  onClick={handleSubmit}>SIGN UP</Button>
      </form>
    </div>
  </div>
  );
}
