import { CircularProgress } from "@mui/material";
import React from "react";
const SuccessView = ({ message, onTimeUp }) => {
  //   const defaultTimer = () => {
  //     <div className="success-view">{message}</div>;
  //   };
  const timeProcess = setInterval(() => {
    onTimeUp();
    clearInterval(timeProcess);
  }, 2500);
  return (
    <div className="success-view">
      <CircularProgress size="25px" />
      {message}
    </div>
  );
};

export default SuccessView;
