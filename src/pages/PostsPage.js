import React, { useContext, useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

import PostDescription from "../components/posts/PostDescription"
import PostsList from "../components/posts/PostsList"

import { SujetsContext } from "../contexts/sujetsContext"
import { PostsContext } from "../contexts/postsContext"
import { UserContext } from "../contexts/userContext"
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
//
const PostsPage = props => {
  //
  const id = props.match.params.id

  const [sujet, setSujet] = useState(null)

  const { sujetsState } = useContext(SujetsContext)

  const { postsState, getPostBySujetId, sendNewPost } = useContext(PostsContext)

  const { userState } = useContext(UserContext)

  //console.log(userState)

  //
  function getSujetById(id) {
    if (sujetsState) {
      const tab = sujetsState.sujets.filter(item => {
        return item._id === id
      })
      setSujet(tab[0])
    }
  }

  //
  useEffect(() => {
    getSujetById(id)
  }, [])

  //
  useEffect(() => {
    getPostBySujetId(id)
  }, [])

  //
  const onSubmitNewPost = description => {
    const newPost = {
      sujetId: sujet._id,
      userName: userState.userName,
      description: description
    }
    sendNewPost(newPost)
  }

  //
  const content = (
    <div className="container">
      {/** */}
      <div className="row">
        <div className="col s12">{afficheBar(postsState.postsLoading)}</div>
      </div>
      {/** */}
      <PostDescription sujet={sujet} onSubmitNewPost={onSubmitNewPost} />
      {/** */}
      <PostsList posts={postsState.posts} user={userState} />
    </div>
  )
  //
  const direction = <Redirect to="/login" />

  return !userState.userIsLogin ? direction : content
  //return content
}

export default PostsPage
