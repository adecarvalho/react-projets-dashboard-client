import React, { createContext, useReducer } from "react"

import { AUTH_URL_LOGIN, AUTH_URL_REGISTER } from "../api/routes"

import { UserReducer } from "../reducers/userReducer"

import {
  USER_LOGIN_OK,
  USER_LOGIN_BEGIN,
  USER_LOGIN_ERROR,
  USER_REGISTER_BEGIN,
  USER_REGISTER_OK,
  USER_REGISTER_ERROR,
  USER_LOGOUT
} from "../reducers/types"

export const UserContext = createContext()

//const AUTH_URL_LOGIN = "http://localhost:8080/api/dashboard/auth/login"

//const AUTH_URL_REGISTER = "http://localhost:8080/api/dashboard/auth/register"

/** */
const UserProvider = props => {
  //
  const initState = {
    userId: "",
    userName: "",
    userEmail: "",
    userErrors: "",
    userLoading: false,
    userIsLogin: false,
    userIsAdmin: false
  }
  const [userState, userDispatch] = useReducer(UserReducer, initState)

  //
  async function onRegisterUser(userToRegister) {
    //
    userDispatch({ type: USER_REGISTER_BEGIN, payload: null })
    //
    setTimeout(() => {
      fetchRegisterUser(userToRegister)
    }, 100)
  }

  async function fetchRegisterUser(userToRegister) {
    //
    try {
      const res = await fetch(AUTH_URL_REGISTER, {
        method: "POST",
        body: JSON.stringify(userToRegister),
        headers: {
          "content-type": "application/json"
        }
      })
      //
      if (res.status === 200) {
        const val = await res.json()

        localStorage.setItem("token", val.token)
        userDispatch({ type: USER_REGISTER_OK, payload: val })
        //
      } else {
        const err = await res.json()
        localStorage.removeItem("token")
        userDispatch({ type: USER_REGISTER_ERROR, payload: err })
      }
    } catch (error) {
      console.log(error)
    }
  }

  //
  function onLoginUser(userToLogin) {
    userDispatch({ type: USER_LOGIN_BEGIN, payload: null })

    setTimeout(() => {
      fetchLoginUser(userToLogin)
    }, 100)
  }

  async function fetchLoginUser(userToLogin) {
    try {
      const res = await fetch(AUTH_URL_LOGIN, {
        method: "POST",
        body: JSON.stringify(userToLogin),
        headers: {
          "content-type": "application/json"
        }
      })
      //
      if (res.status === 200) {
        const val = await res.json()

        localStorage.setItem("token", val.token)
        userDispatch({ type: USER_LOGIN_OK, payload: val })
        //
      } else {
        const err = await res.json()
        localStorage.removeItem("token")
        userDispatch({ type: USER_LOGIN_ERROR, payload: err })
      }
    } catch (error) {
      console.log(error)
    }
  }

  //
  function onLogoutUser() {
    localStorage.removeItem("token")
    userDispatch({ type: USER_LOGOUT, payload: null })
  }

  /** */
  return (
    <UserContext.Provider
      value={{ userState, onRegisterUser, onLoginUser, onLogoutUser }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
