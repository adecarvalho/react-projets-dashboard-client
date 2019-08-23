import React, { createContext, useReducer } from "react"
import { PostsReducer } from "../reducers/postsReducer"

import { POST_URL, POST_BY_SUJET_ID_URL } from "../api/routes"

import {
  POSTS_FETCH,
  POSTS_BY_SUJET_ID_BEGIN,
  POSTS_SEND_NEW,
  POSTS_DELETE_BY_ID
} from "../reducers/types"

export const PostsContext = createContext()

//const POST_URL = "http://localhost:8080/api/dashboard/posts"
//const POST_BY_SUJET_ID_URL = "http://localhost:8080/api/dashboard/posts/sujet"

/** */
const PostsProvider = props => {
  //
  const initState = {
    posts: [],
    postsLoading: false
  }
  const [postsState, postsDispatch] = useReducer(PostsReducer, initState)

  //
  async function fetchPostBySujetId(id) {
    try {
      const res = await fetch(`${POST_BY_SUJET_ID_URL}/${id}`)

      const zeposts = await res.json()

      postsDispatch({ type: POSTS_FETCH, payload: zeposts })
    } catch (error) {
      console.log(error)
    }
  }

  //
  function getPostBySujetId(id) {
    //
    postsDispatch({ type: POSTS_BY_SUJET_ID_BEGIN, payload: null })
    setTimeout(() => {
      fetchPostBySujetId(id)
    }, 100)
  }

  //
  async function sendNewPost(post) {
    try {
      const res = await fetch(POST_URL, {
        method: "POST",
        body: JSON.stringify(post),
        headers: { "Content-Type": "application/json" }
      })
      //
      const json = await res.json()
      postsDispatch({ type: POSTS_SEND_NEW, payload: json })
      //
    } catch (error) {
      console.log(error)
    }
  }

  //
  async function sendVisa(post) {
    const id = post._id

    try {
      await fetch(`${POST_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: { "Content-Type": "application/json" }
      })
    } catch (error) {
      console.log(error)
    }
  }

  //
  async function deletePostById(id) {
    try {
      const res = await fetch(`${POST_URL}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
      //
      await res.json()
      postsDispatch({ type: POSTS_DELETE_BY_ID, payload: id })
    } catch (error) {
      console.log(error)
    }
  }

  //
  /* async function getAllPosts() {
    try {
      const res = await fetch(POST_URL)

      const zeposts = await res.json()

      postsDispatch({ type: POSTS_FETCH, payload: zeposts })
    } catch (error) {
      console.log(error)
    }
  }

  // */

  /** */
  return (
    <PostsContext.Provider
      value={{
        postsState,
        getPostBySujetId,
        sendNewPost,
        deletePostById,
        sendVisa
      }}
    >
      {props.children}
    </PostsContext.Provider>
  )
}

export default PostsProvider
