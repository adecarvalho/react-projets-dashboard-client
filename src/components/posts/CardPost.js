import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { PostsContext } from "../../contexts/postsContext"

import { formatDate } from "../../utils/formatDate"

const CardPost = ({ post, isAdmin }) => {
  //
  const { deletePostById } = useContext(PostsContext)

  //
  function onDeleteHandler(id) {
    deletePostById(id)
  }
  //
  function afficheBadge(visa) {
    if (!visa) {
      return <span className="new badge red" />
    }
  }

  //
  function afficheButtons(admin, postId) {
    if (admin) {
      return (
        <div className="card-action btn-container">
          <Link
            to={"/visa/" + postId}
            className="btn-small waves-effect waves-light"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              onDeleteHandler(postId)
            }}
            className="btn-small waves-effect waves-light red lighten-2"
          >
            Delete
          </button>
        </div>
      )
    } else {
      return null
    }
  }

  //
  const containt = (
    <div className="col s12 m6">
      <div className="card white z-depth-1">
        <div className="card-content">
          {/** */}
          <span className="card-title">{post.userName}</span>
          <p>{post.description}</p>
          <small className="grey-text darken-1">
            Posté le: {formatDate(post.create_at)} {afficheBadge(post.visa)}
          </small>
          <hr />
          <p className="red-text">{post.remarque}</p>
        </div>
        {/** */}
        {afficheButtons(isAdmin, post._id)}
      </div>
    </div>
  )
  //
  return containt
}

export default CardPost
