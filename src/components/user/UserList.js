import React, { useContext } from "react";
import githubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";

const UsersList = () => {
  const gc = useContext(githubContext);
  const { users } = gc;

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
