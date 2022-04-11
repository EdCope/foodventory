import React, { useState } from "react";
import axios from "axios";
import { ConfirmationMessage } from "./confirmationMessage";

import bcrypt from "bcryptjs";
import { useNavigate } from "react-router";

const salt = bcrypt.genSaltSync(10);

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target === document.getElementById("password-form")) {
      setPassword(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(password, salt);
    const postData = { email: email, password: hashedPassword };
    axios.post(`http://localhost:8000/user/`, postData).then((res) => {
      console.log(res);
      setEmail("");
      setPassword("");
      setMessage(res.data.message);
      navigate('/login');
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>

        <div className="col-6">

        <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email-form"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleChange}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="password-form"
            value={password}
            onChange={handleChange}
            minlength="5"
          ></input>
        </div>
        <button className="btn btn-primary" type="submit" id="sign-up-button">
          Sign up
        </button>
      </form>
        </div>

        <div className="col-3"></div>
      </div>

      <ConfirmationMessage message={message} />
    </div>

  );
};
