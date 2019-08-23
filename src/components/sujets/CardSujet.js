import React from "react"
import { Link } from "react-router-dom"

const CardSujet = ({ id, name, description }) => {
  const content = (
    <div className="col s12 m6">
      <div className="card white z-depth-1 card-sujet">
        <div className="card-content">
          <span
            style={{
              fontSize: "1.5rem",
              fontStyle: "italic",
              fontWeight: "bold"
            }}
            className="card-title text-darken-3 center"
          >
            {name}
          </span>
          <p className="grey-text text-darken-1">{description}</p>
        </div>
        <div className="card-action">
          <Link
            to={"/posts/" + id}
            className="btn blue-grey lighten-1 waves-effect waves-light"
          >
            Ouvrir
          </Link>
        </div>
      </div>
    </div>
  )

  return content
}

export default CardSujet
