import React, { useContext } from "react"
import FormRegister from "../components/auth/FormRegister"
import { UserContext } from "../contexts/userContext"
import ErrorsInfo from "../components/ErrorsInfo"

//
const afficheBar = val => {
  if (val) {
    return (
      <div className="progress">
        <div className="indeterminate indigo" />
      </div>
    )
  } else {
    return null
  }
}

/** */
const RegisterPage = props => {
  const { userState, onRegisterUser } = useContext(UserContext)

  //
  function onRegisterHandler(userToRegister) {
    onRegisterUser(userToRegister)
    setTimeout(() => {
      props.history.push("/sujets")
    }, 1000)
  }

  //
  const content = (
    <div className="container">
      <div className="row">{afficheBar(userState.userLoading)}</div>
      {/*** */}
      <div className="row">
        <FormRegister onRegisterHandler={onRegisterHandler} />
      </div>
      {/** */}
      <ErrorsInfo errors={userState.userErrors} />
      {/** */}
    </div>
  )

  return content
}

export default RegisterPage
