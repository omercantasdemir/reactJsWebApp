// import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Root from "./components/Root";
import { Box } from "@mui/material";
import "./App.css";
import ListUsers from "./components/ListUsers/ListUsers";
import SignIn from "./components/SignIn/SignIn";
import ActivateUser from "./components/Activation/ActivateUser";

function App() {
  return (
    <>
      <Root />
      <Box className="mainDiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/activation/:token" element={<ActivateUser />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
