import React, { useContext } from "react";
import githubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";

const UsersList = () => {
  const gc = useContext(githubContext);
  const { users } = gc;

  return (
    <div style={userStyle}>
      <h1>User List</h1>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default UsersList;
