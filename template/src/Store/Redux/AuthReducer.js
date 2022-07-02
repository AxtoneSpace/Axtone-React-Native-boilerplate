import { Types } from "../Constans";

export const AuthActions = {
    doLoginRequest: data => ({
      type: Types.POST_LOGIN_REQUEST,
      payload: data,
    }),
    doLoginSuccess: data => ({
      type: Types.POST_LOGIN_SUCCESS,
      payload: data,
    }),
    doLoginFailure: error => ({
      type: Types.POST_LOGIN_FAILURE,
      error,
    })
}

const initialState = {
    login: {data: [], fetching: false, error: null}
}

export const AuthSelector = {
  getCredent: state => state.authReducer.login,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case Types.POST_LOGIN_REQUEST:
        return {
          ...state,
          login: {data: [], fetching: true, error: null},
        };
      case Types.POST_LOGIN_SUCCESS:
        return {
          ...state,
          login: {data: action.payload, fetching: false, error: null},
        };
      case Types.POST_LOGIN_FAILURE:
        return {
          ...state,
          login: {data: [], fetching: false, error: action.error},
        };
      default:
        return state;
    }
}

export default AuthReducer;