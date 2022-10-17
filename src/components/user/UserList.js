import React, { useContext } from "react";
import githubContext from "../../context/github/githubContext";

/* Import Layout and Componnet*/
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UsersList = () => {
  const gc = useContext(githubContext);
  const { loading, users } = gc;

  return (
    <>
      {!loading ? (
        <div style={userStyle}>
          <h4>User List</h4>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default UsersList;
