import React, { useState } from "react"

const FormVisa = ({ post, onCreateVisa }) => {
  //
  const [remarque, setRemarque] = useState("")
  const [errors, setErrors] = useState(">")

  //
  function onPublishHandler() {
    if (remarque.trim() !== "") {
      onCreateVisa(remarque)
    } else {
      setErrors("Veuillez saisir une remarque")
    }
  }

  //
  function onEraseHandler() {
    setRemarque("")
    setErrors("")
  }

  //
  const content = (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card white z-depth-1">
            <div className="card-content">
              <span className="card-title center grey-text darken-2">
                Visa post: {post && post._id}
              </span>
              {/** */}
              <form>
                {/** */}
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="descriptions"
                      className="materialize-textarea"
                      value={post && post.description}
                      readOnly={true}
                    />
                    <label className="active" htmlFor="descriptions">
                      Descriptions
                    </label>
                  </div>
                </div>
                {/** */}
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="remarques"
                      className="materialize-textarea validate"
                      value={remarque}
                      required
                      onChange={e => setRemarque(e.target.value)}
                    />
                    <label htmlFor="remarques">Remarques</label>
                  </div>
                </div>
              </form>
              <div className="row">
                <span
                  style={{ fontSize: "1.4rem", marginLeft: "0.4rem" }}
                  className="red-text darken-2"
                >
                  {errors}
                </span>
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
                  onClick={onEraseHandler}
                  className="btn-small waves-effect waves-light red darken-2"
                >
                  Effacer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return content
}

export default FormVisa
