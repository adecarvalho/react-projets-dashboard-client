import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"
import { UserContext } from "../../contexts/userContext"

//
const NavigationBar = props => {
  const { userState, onLogoutUser } = useContext(UserContext)
  //
  return (
    <nav className="navigation-container">
      {/*  */}
      <div className="navigation-item">
        <NavLink to="/" className="black-text" style={{ marginLeft: "1rem" }}>
          Dashboard
        </NavLink>
      </div>
      {/*  */}
      <div className="navigation-item">
        {!userState.userIsLogin ? (
          <NavLink to="/login" className="black-text">
            Connexion
          </NavLink>
        ) : (
          <a href="/#" onClick={onLogoutUser} className="black-text">
            Deconnexion
          </a>
        )}
      </div>
      {/*  */}
      <div className="navigation-item">
        <NavLink to="/sujets" className="black-text">
          Sujets
        </NavLink>
      </div>
      {/** */}
      <div>
        <Avatar username={userState.userName} />
      </div>
      {/*  */}
    </nav>
  )
}

export default NavigationBar
