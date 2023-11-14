import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("/api/v1/users/all").catch((error) => {
      alert(error);
    });
    setUsers(response.data);
  };
  useEffect(() => {
    getUsers();

    console.log(users);
  }, []);

  useEffect(() => {
    users.map((user) => {
      console.log(user.username);
    });
    console.log(users);
  }, [users]);

  return (
    <div className="userList">
      {users?.map((user) => {
        debugger;
        return <UserDetail user={user} />;
      })}
    </div>
  );
};

export default ListUsers;
