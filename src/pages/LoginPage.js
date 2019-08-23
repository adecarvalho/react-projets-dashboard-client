import React, { useContext } from "react"
import FormLogin from "../components/auth/FormLogin"
import { UserContext } from "../contexts/userContext"
import ErrorsInfo from "../components/ErrorsInfo"

//
const afficheBar = val => {
  if (val) {
    return (
      <div className="progress">
        <div className="indeterminate black" />
      </div>
    )
  } else {
    return null
  }
}

/** */
const LoginPage = props => {
  const { userState, onLoginUser } = useContext(UserContext)

  //
  function onLoginHandler(userToLogin) {
    onLoginUser(userToLogin)

    setTimeout(() => {
      props.history.push("/sujets")
    }, 1000)
  }

  //
  const content = (
    <div className="container">
      <div className="row">{afficheBar(userState.userLoading)}</div>
      {/** */}
      <div className="row">
        <FormLogin onLoginHandler={onLoginHandler} />
      </div>
      {/** */}
      <ErrorsInfo errors={userState.userErrors} />
      {/** */}
    </div>
  )

  return content
}

export default LoginPage
