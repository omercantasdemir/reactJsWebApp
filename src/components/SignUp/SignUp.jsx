import axios from "axios";
import Input from "./Input";
import React, { useEffect, useMemo, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import SuccessView from "./SuccessView";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [mail, setMail] = useState("");
  const [unable, setUnable] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [apiProcess, setApiProcess] = useState(false);
  const [apiResponse, setApiResponse] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [apiErrors, setApiErrors] = useState();
  const navigate = useNavigate();

  const passwordRepeatError = useMemo(() => {
    if (password !== passwordRepeat) {
      return "Şifreler uyuşmuyor.";
    }
  }, [password, passwordRepeat]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiProcess(true);

    const response = await axios
      .post("/api/v1/users", {
        username,
        password,
        mail,
      })
      .catch((axiosError) => {
        if (axiosError.response.data.statusCode === 400) {
          setApiErrors(axiosError.response.data.validationErrors);
        } else {
          setApiErrors(["Unexpected error occured. Please try again."]);
        }
      })
      .finally(() => {
        setApiProcess(false);
      });
    setApiResponse(response);
  };
  const clearAll = () => {
    setMail("");
    setUsername("");
    setPassword("");
    setPasswordRepeat("");
    setApiResponse(undefined);
    navigate("/signin");
  };
  useEffect(() => {
    setUnable(password === "" || password !== passwordRepeat);
    setApiErrors((list) => {
      return { ...list, password: undefined };
    });
  }, [password, passwordRepeat]);
  useEffect(() => {
    setApiErrors((list) => {
      return { ...list, username: undefined };
    });
  }, [username]);
  useEffect(() => {
    setApiErrors((list) => {
      return { ...list, mail: undefined };
    });
  }, [mail]);

  return (
    <form className="signupForm" onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      <Input
        label="Username"
        id="username"
        error={apiErrors?.username}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Email"
        value={mail}
        id="mail"
        error={apiErrors?.mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <Input
        value={password}
        type="password"
        label="Password"
        id="password"
        error={apiErrors?.password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <Input
        type="password"
        value={passwordRepeat}
        label="Repeat Password"
        id="passwordRepeat"
        error={passwordRepeatError}
        onChange={(e) => setPasswordRepeat(e.target.value)}
      />
      {apiResponse?.data?.message && (
        <SuccessView message={apiResponse.data.message} onTimeUp={clearAll} />
      )}
      {/* {Object.values(apiErrors)[0] !== undefined && (
        <div className="error-view">
          {Object.values(apiErrors).map((error) => {
            return <p>{error}</p>;
          })}
        </div>
      )} */}
      <div className="buttonDiv">
        <button
          className="submitButton"
          disabled={unable}
          style={unable ? { backgroundColor: "red" } : {}}
        >
          {!unable ? (
            "Sign Up"
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {apiProcess && <CircularProgress size={20} />}
              <Typography style={{ marginLeft: "10px" }}>
                Check Answers
              </Typography>
            </div>
          )}
        </button>
        <div className="signupRedirect">
          <a href="/signin">
            <p>Allready have an account?</p>
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
