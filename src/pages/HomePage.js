import React, { useState, useEffect } from "react"
import ConnexionInfo from "../components/layout/ConnexionInfo"
import Notification from "../components/notification/Notification"

import { POST_NOTIFICATIONS_URL } from "../api/routes"

//
const HomePage = props => {
  const [notifications, setNotifications] = useState([])

  async function getNotifications() {
    try {
      const res = await fetch(POST_NOTIFICATIONS_URL)

      const json = await res.json()

      setNotifications(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])

  //
  const content = (
    <div className="container">
      <div className="row">
        {/** */}
        <div className="col s12 m6">
          <ConnexionInfo />
        </div>
        {/** */}
        <div className="col s12 m6">
          <Notification notifications={notifications} />
        </div>
      </div>
    </div>
  )

  return content
}

export default HomePage
