import React from "react"
import NotificationItem from "./NotificationItem"

const Notification = ({ notifications }) => {
  //
  return (
    <div className="card white z-depth-1">
      <div className="card-content">
        <span className="card-title center">Notifications</span>
        {/** */}
        {notifications &&
          notifications.map(item => {
            return (
              <NotificationItem
                key={item._id}
                userName={item.userName}
                date={item.create_at}
                sujetId={item.sujetId}
              />
            )
          })}
        {/** */}
      </div>
    </div>
  )
}

export default Notification
