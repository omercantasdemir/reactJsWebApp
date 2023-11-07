// import "./App.css";
import SignUp from "./components/SignUp";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Root from "./components/Root";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Root />
      <Box className="mainDiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
