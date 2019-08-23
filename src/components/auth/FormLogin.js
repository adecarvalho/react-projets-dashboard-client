import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { validationFormLogin } from "../../utils/validationForm"
//
const FormLogin = ({ onLoginHandler }) => {
  //
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState("")

  const onSubmitHandler = e => {
    if (validateForm()) {
      onLoginHandler({
        email,
        password
      })
    }
  }

  //
  const validateForm = () => {
    const newuser = {
      email,
      password
    }
    const res = validationFormLogin(newuser)
    //
    if (res.validate === false) {
      setErrors(res.error)
      return false
    } else {
      setErrors("")
      return true
    }
  }

  //
  const onDeleteHandler = e => {
    setEmail("")
    setPassword("")
    setErrors("")
  }

  //
  const content = (
    <div className="col s12">
      <div className="white card z-depth-1">
        <div className="card-content">
          <div className="card-title center grey-text darken-2">Connexion</div>
          <form>
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                required
                className="validate"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <label htmlFor="email">Adresse Email</label>
            </div>

            {/** */}
            {/** */}

            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                required
                className="validate"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <label htmlFor="password">Password (6 caractères min)</label>
            </div>

            {/** */}
          </form>
          {/**  affiche errors*/}
          <div className="row">
            <div className="col s12">
              <span className="red-text " style={{ fontSize: "1.2rem" }}>
                {errors}
              </span>
            </div>
          </div>
        </div>
        {/** */}
        <div className="card-action">
          <div className="center">
            <NavLink to="/register">Création compte utilisateur</NavLink>
          </div>
          <div className="btn-container">
            {/** */}
            <button
              className="btn   waves-effect waves-light"
              onClick={onSubmitHandler}
            >
              Valider
            </button>
            {/** */}

            <div>
              <button
                className="btn red lighten-1 waves-effect waves-light"
                onClick={onDeleteHandler}
              >
                Effacer
              </button>
            </div>
            {/** */}
          </div>
        </div>
        {/** */}
      </div>
    </div>
  )

  return content
}

export default FormLogin
