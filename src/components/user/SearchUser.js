import React, { useContext, useState } from "react";
import githubContext from "../../context/github/githubContext";

const SearchUser = () => {
  const [text, setText] = useState("");

  const gc = useContext(githubContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    gc.searchUsers(setText);
    setText("");
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
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchUser;
