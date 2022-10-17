import React, { useContext, useState } from "react";
import githubContext from "../../context/github/githubContext";

const SearchUser = () => {
  
  const [userSearch, setUserSearch] = useState('');
  const gc = useContext(githubContext);

  const onChange = (e) => {
    setUserSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    gc.searchUsers(userSearch);
    setUserSearch('');
  };

  return (
    <div>
      <h1>Search User</h1>
      <form onSubmit={onSubmit}>
        <div className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={userSearch}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </div>
      </form>
      {gc.users.length > 0 ? <button className="btn btn-warnning btn-block" onClick={gc.userClear}>Clear</button> : null}
    </div>
  );
};

export default SearchUser;
