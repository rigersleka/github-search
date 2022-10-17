import React, { useContext, useState } from "react";

/* Import Context */
import alertContext from "../../context/alert/alertContext";
import githubContext from "../../context/github/githubContext";

const SearchUser = () => {
  const [userSearch, setUserSearch] = useState("");
  const gc = useContext(githubContext);
  const al = useContext(alertContext);

  const onChange = e => {
    setUserSearch(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(userSearch === ''){
      al.setAlert('Please Enter Something', 'info');
      return;
    }
    gc.searchUsers(userSearch);
    setUserSearch('');
    
  }

  return (
    <div>
      <h3>Search User</h3>
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
      {gc.users.length > 0 ? (
        <button className="btn btn-warnning btn-block" onClick={gc.userClear}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default SearchUser;
