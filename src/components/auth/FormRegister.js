import React, { useState } from "react"
import { validationFormRegister } from "../../utils/validationForm"

const FormRegister = ({ onRegisterHandler }) => {
  //
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState("")

  //validate form
  const validateForm = () => {
    const userToRegister = {
      username,
      email,
      password,
      confirmPassword
    }
    const res = validationFormRegister(userToRegister)
    if (res.validate === false) {
      setErrors(res.error)
      return false
    } else {
      //test password
      if (password !== confirmPassword) {
        setErrors("Password non confirmé")
        return false
      }
    }
    setErrors("")
    return true
  }

  //
  const onSubmitHandler = e => {
    if (validateForm()) {
      onRegisterHandler({
        username,
        email,
        password
      })
    }
  }

  //
  const onDeleteHandler = e => {
    setUserName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setErrors("")
  }

  //
  const content = (
    <div className="col s12">
      <div className="white card z-depth-1">
        <div className="card-content">
          <div className="card-title center grey-text darken-2">
            Création du Compte Utilisateur
          </div>
          <form>
            <div className="input-field col s12">
              <input
                id="username"
                type="text"
                required
                className="validate"
                value={username}
                onChange={e => setUserName(e.target.value)}
              />

              <label htmlFor="username">Nom</label>
            </div>

            {/** */}
            {/** */}

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
            {/** */}

            <div className="input-field col s12">
              <input
                id="confirm-password"
                type="password"
                required
                className="validate"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />

              <label htmlFor="confirm-password">Confirmer Password</label>
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
        <div className="card-action btn-container">
          <button
            className="btn  waves-effect waves-light"
            onClick={onSubmitHandler}
          >
            Valider
          </button>
          {/** */}
          <button
            className="btn waves-effect waves-light orange"
            onClick={onDeleteHandler}
          >
            Effacer
          </button>
        </div>
        {/** */}
      </div>
    </div>
  )

  return content
}

export default FormRegister
