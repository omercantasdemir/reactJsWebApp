import React from "react";

const UserDetail = ({ user }) => {
  debugger;
  console.log(user);
  return (
    <div className="userDetail">
      <h3>{user.username}</h3>
    </div>
  );
};

export default UserDetail;
