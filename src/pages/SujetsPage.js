import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import { SujetsContext } from "../contexts/sujetsContext"
import { UserContext } from "../contexts/userContext"

import SujetsList from "../components/sujets/SujetsList"

const SujetsPage = props => {
  const { sujetsState } = useContext(SujetsContext)
  const { userState } = useContext(UserContext)

  //console.log(userState)

  //
  const content = (
    <div className="container">
      <div className="row">
        <SujetsList sujets={sujetsState.sujets} />
      </div>
    </div>
  )
  //
  const direction = <Redirect to="/login" />

  return !userState.userIsLogin ? direction : content
  //return content
}

export default SujetsPage
