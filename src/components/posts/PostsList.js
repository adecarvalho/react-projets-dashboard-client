import React from "react"
import CardPost from "./CardPost"

const PostsList = ({ posts, user }) => {
  //console.log(user.userIsAdmin)
  //
  const containt = (
    <div className="row">
      {posts &&
        posts.map(post => {
          return (
            <CardPost key={post._id} post={post} isAdmin={user.userIsAdmin} />
          )
        })}
    </div>
  )

  return containt
}

export default PostsList
