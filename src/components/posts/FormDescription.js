import React, { useState } from "react"

const FormDescription = props => {
  //
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState("")
  //
  function validationForm() {
    if (description.trim() === "") {
      setErrors("Veuillez saisir une description")
      setDescription("")
      return false
    }
    return true
  }

  //
  function onPublishHandler() {
    if (validationForm()) {
      setDescription("")
      props.onFormDescriptionSubmit(description)
    }
  }

  //
  function onDeleteHandler() {
    setDescription("")
    setErrors(">")
  }

  //
  const containt = (
    <div className="row">
      <div className="col s12">
        <div className="card white z-depth-1">
          <div className="card-content">
            <span className="card-title center grey-text darken-2">
              Actions de la semaine
            </span>
            {/** */}
            <form>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="descriptions"
                    value={description}
                    className="materialize-textarea validate"
                    required
                    onChange={e => setDescription(e.target.value)}
                  />
                  <label htmlFor="descriptions">Actions</label>
                </div>
              </div>
            </form>
            <div className="row">
              <span
                style={{ marginLeft: "0.5rem", fontSize: "1.4rem" }}
                className="center red-text darken-3"
              >
                {errors}
              </span>
            </div>

            {/** */}
          </div>
          {/** */}
          <div className="card-action btn-container">
            <button
              onClick={onPublishHandler}
              className="btn-small waves-effect waves-light"
            >
              Valider
            </button>

            <button
              onClick={onDeleteHandler}
              className="btn-small waves-effect waves-light red darken-2"
            >
              Effacer
            </button>
          </div>
          {/** */}
        </div>
      </div>
    </div>
  )
  //
  return containt
}

export default FormDescription
