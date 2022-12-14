import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import githubContext from "../../context/github/githubContext";

import Spinner from "../layout/Spinner";

const UserDetail = ({ match }) => {
  const gc = useContext(githubContext);

  useEffect(() => {
    gc.getUser(match.params.login);
    gc.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    login,
    public_repos,
    public_gists,
    hireable,
    company,
  } = gc.user;

  console.log(name);
  return (
    <>
      {!gc.loading ? (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back To Search
          </Link>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times-circle text-danger"></i>
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt="avatar"
                className="round-img"
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserDetail;
