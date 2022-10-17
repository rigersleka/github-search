import React, { Fragment } from "react";

/* Import Component */
import SearchUser from "../user/SearchUser";
import UsersList from "../user/UserList";

const Home = () => {
  return (
    <Fragment>
      <SearchUser />
      <UsersList />
    </Fragment>
  );
};

export default Home;
