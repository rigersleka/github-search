import React, { Fragment } from "react";

/* Import Component */
import SearchUser from "../user/SearchUser";
import UsersList from "../user/UserList";

const Home = () => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <SearchUser />
      <UsersList />
    </Fragment>
  );
};

export default Home;
