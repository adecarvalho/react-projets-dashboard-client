import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"

import { UserContext } from "../../contexts/userContext"

const NavBar = props => {
  const { userState, onLogoutUser } = useContext(UserContext)

  //
  return (
    <nav className="nav-container black">
      <div className="nav-ul">
        <ul>
          <li>
            <NavLink to="/" style={{ fontSize: "1.4rem" }}>
              Dashboard
            </NavLink>
          </li>

          <li>
            {!userState.userIsLogin ? (
              <NavLink to="/login">Connexion</NavLink>
            ) : (
              <a href="/#" onClick={onLogoutUser}>
                Deconnexion
              </a>
            )}
          </li>
          <li>
            <NavLink to="/sujets">Sujets</NavLink>
          </li>
        </ul>
      </div>
      {userState.userIsLogin ? (
        <div>
          <Avatar username={userState.userName} />
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
