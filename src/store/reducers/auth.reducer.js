import { authTypes } from "../types";

const { SIGN_IN, SIGN_UP, SIGN_OUT } = authTypes;

const initialState = {
  token: null,
  userId: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default AuthReducer;
