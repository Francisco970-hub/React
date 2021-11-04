import React, { Component } from "react";

import Button from "../button/button.component";

import Axios from "axios";

class Res extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    if (this.state.password !== this.state.confirmPassword)
      console.log(Error("Invalid password"));
    else
      await Axios.post("http://localhost:5000/register", {
        email: this.state.email,
        password: this.state.password,
      }).then((res) => {
        console.log(res);
        console.log(this.state.email);
        console.log(this.state.password);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      /*console.log(this.state.email);
      console.log(this.state.password);*/
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h1>RESGISTER</h1>
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <h3 type="email">Email</h3>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.email}
            required
          />
          <h3 type="text">Password</h3>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.password}
            required
          />
          <h3 type="text">Confirm Password</h3>
          <input
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={this.confirmPassword}
            required
          />
          <Button type="submit">REGISTER</Button>
        </form>
      </div>
    );
  }
}

export default Res;
