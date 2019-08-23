import {
  USER_REGISTER_BEGIN,
  USER_LOGIN_BEGIN,
  USER_REGISTER_OK,
  USER_REGISTER_ERROR,
  USER_LOGOUT,
  USER_LOGIN_OK,
  USER_LOGIN_ERROR
} from "./types"

//
export const UserReducer = (state, action) => {
  let newstate = undefined
  //
  switch (action.type) {
    //
    case USER_REGISTER_BEGIN:
      newstate = { ...state, userLoading: true }
      return newstate

    //
    case USER_REGISTER_OK:
      newstate = {
        ...state,
        userIsLogin: true,
        userLoading: false,
        userErrors: "",
        userId: action.payload.payload._id,
        userName: action.payload.payload.username,
        userEmail: action.payload.payload.email,
        userIsAdmin: action.payload.payload.isAdmin
      }

      return newstate
    //
    case USER_REGISTER_ERROR:
      const error_register = action.payload.message

      newstate = {
        ...state,
        userIsLogin: false,
        userLoading: false,
        userErrors: error_register,
        userId: "",
        userName: "",
        userEmail: "",
        userIsAdmin: false
      }

      return newstate

    //
    case USER_LOGOUT:
      newstate = {
        ...state,
        userIsLogin: false,
        userLoading: false,
        userErrors: "",
        userId: "",
        userName: "",
        userEmail: "",
        userIsAdmin: false
      }
      return newstate

    //
    case USER_LOGIN_BEGIN:
      newstate = { ...state, userLoading: true }
      return newstate

    //
    case USER_LOGIN_OK:
      newstate = {
        ...state,
        userIsLogin: true,
        userLoading: false,
        userErrors: "",
        userId: action.payload.payload._id,
        userName: action.payload.payload.username,
        userEmail: action.payload.payload.email,
        userIsAdmin: action.payload.payload.isAdmin
      }
      return newstate

    //
    case USER_LOGIN_ERROR:
      const error_login = action.payload.message

      newstate = {
        ...state,
        userIsLogin: false,
        userLoading: false,
        userErrors: error_login,
        userId: "",
        userName: "",
        userEmail: "",
        userIsAdmin: false
      }

      return newstate

    default:
      return state
  }
}
