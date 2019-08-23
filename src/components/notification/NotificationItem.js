import React from "react"

import { Link } from "react-router-dom"
import manUser from "../../images/man-user.svg"

import { formatDate } from "../../utils/formatDate"

const NotificationItem = props => {
  //
  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <img src={manUser} alt="user icon" className="circle" />
        <span className="title">{props.userName}</span>
        <p className="grey-text darken-2">Posté le: {formatDate(props.date)}</p>
        <Link to={`/posts/${props.sujetId}`} className="secondary-content">
          Ouvrir
        </Link>
      </li>
    </ul>
  )
}

export default NotificationItem
