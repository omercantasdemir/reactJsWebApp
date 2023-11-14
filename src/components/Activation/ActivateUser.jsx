import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActivateUser = () => {
  const { token } = useParams();
  const [apiResponse, setApiResponse] = useState();
  const activateAccount = async () => {
    debugger;
    const response = await axios.patch(`/api/v1/users/${token}/activate`);
    console.log(response);
    setApiResponse(response);
  };
  useEffect(() => {
    activateAccount();
    debugger;
    alert(apiResponse?.data.message);
  }, []);

  return (
    <div>
      <p>{apiResponse?.data.message}</p>
    </div>
  );
};

export default ActivateUser;
