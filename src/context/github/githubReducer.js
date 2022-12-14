import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS } from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
      };
    case GET_REPOS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
