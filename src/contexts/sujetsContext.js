import React, { createContext, useReducer, useEffect } from "react"

import { SUJETS_URL } from "../api/routes"

import { SujetsReducer } from "../reducers/sujetsReducer"

import { SUJETS_FETCH } from "../reducers/types"

export const SujetsContext = createContext()

//const SUJETS_URL = "http://localhost:8080/api/dashboard/sujets"

/** */
const SujetsProvider = props => {
  //
  const initState = {
    sujets: []
  }
  const [sujetsState, sujetsDispatch] = useReducer(SujetsReducer, initState)

  //
  async function getSujets() {
    try {
      const res = await fetch(SUJETS_URL)

      const zesujets = await res.json()

      sujetsDispatch({ type: SUJETS_FETCH, payload: zesujets })
      //
    } catch (error) {
      console.log(error)
    }
  }

  //
  useEffect(() => {
    getSujets()
  }, [])

  /** */
  return (
    <SujetsContext.Provider value={{ sujetsState }}>
      {props.children}
    </SujetsContext.Provider>
  )
}

export default SujetsProvider
