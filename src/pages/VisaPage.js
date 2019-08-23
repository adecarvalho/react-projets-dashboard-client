import React, { useContext, useEffect, useState } from "react"

import { PostsContext } from "../contexts/postsContext"
import FormVisa from "../components/visa/FormVisa"

//
const VisaPage = props => {
  //
  const postId = props.match.params.id

  const { postsState, sendVisa } = useContext(PostsContext)
  const [lepost, setLepost] = useState({})

  //
  function onCreateVisa(remarque) {
    const newpost = {
      ...lepost,
      remarque: remarque,
      visa: true
    }
    //
    sendVisa(newpost)
    //
    props.history.push("/posts/" + lepost.sujetId)
  }

  useEffect(() => {
    const tab = postsState.posts.filter(item => item._id === postId)
    if (tab) {
      setLepost(tab[0])
    }
  }, [])
  //

  //
  return <FormVisa post={lepost} onCreateVisa={onCreateVisa} />
}

export default VisaPage
