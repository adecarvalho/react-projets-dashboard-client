import React from "react"
import manUser from "../../images/man-user.svg"

const Avatar = ({ username }) => {
  return (
    <div className="avatar-container">
      <img src={manUser} alt="user icon" className="avatar-img" />
      <p className="avatar-name">
        <span className="black-text">{username}</span>
      </p>
    </div>
  )
}

export default Avatar
