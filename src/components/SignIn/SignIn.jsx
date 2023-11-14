import React, { useState } from "react";
import Input from "./Input";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  return (
    <form className="signinForm">
      <h1>Sign In</h1>
      <Input
        value={username}
        id="username"
        label="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        value={mail}
        id="mail"
        label="Mail"
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <Input
        value={password}
        id="password"
        type="password"
        label="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div
        className="buttonDiv"
        style={{ width: 550, alignContent: "center", justifyContent: "center" }}
      >
        <button className="submitButton">Sign In</button>
        <div className="signupRedirect">
          <a href="/signup">
            <p>No account?</p>
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
