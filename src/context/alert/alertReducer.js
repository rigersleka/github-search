import {SET_ALERT} from "../types";

const alertReducer = (state, action) => {
    switch (action.type) {
        case SET_ALERT:
          return {
            ...state,
            alert: action.payload,
          }
        default:
          return state;
      }
}

export default alertReducer;