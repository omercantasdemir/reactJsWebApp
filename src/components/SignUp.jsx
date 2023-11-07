import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";

const SignUp = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [able, setAble] = useState(true);
  const [apiProcess, setApiProcess] = useState(false);
  const checkAble = () => {
    setAble(
      !password ||
        !username ||
        !passwordRepeat ||
        !mail ||
        password !== passwordRepeat
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiProcess(true);
    const response = await axios
      .post("/api/v1/users", {
        username,
        password,
        mail,
      })
      .finally(() => {
        setApiProcess(false);
      });
  };
  useEffect(() => {
    checkAble();
  }, [username, password, mail, passwordRepeat]);
  return (
    <form className="signupForm" onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      <div className="elementContainer">
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="elementContainer">
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
      </div>

      <div className="elementContainer">
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="elementContainer">
        <label htmlFor="passwordRepeat">Password Repeat: </label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={(e) => setPasswordRepeat(e.target.value)}
          value={passwordRepeat}
        />
      </div>
      <div>
        <button
          // {/* ilerleyen zamanda bak */}
          // {/* {apiProcess? */}
          // {/* {<CircularProgress size={20} />} */}
          className="submitButton"
          disabled={able}
          style={able ? { backgroundColor: "red" } : {}}
        >
          {!able ? (
            "Sign Up"
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              {apiProcess && (
                <div>
                  <CircularProgress size={20} />
                </div>
              )}
              <Typography style={{ marginLeft: "10px" }}>
                Check Answers
              </Typography>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUp;
