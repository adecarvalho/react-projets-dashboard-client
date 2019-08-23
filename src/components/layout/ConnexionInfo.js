import React from "react"

const ConnexionInfo = props => {
  const content = (
    <div className="card z-depth-1">
      <div className="card-content">
        <span className="card-title center">
          Interface Web pour le suivi des projets
        </span>
        <p className="grey-text text-darken-2">
          Veuillez vous connecter a votre compte, via le bouton Connexion. Puis
          choisir votre sujet, via le bouton Sujet. A la fin de votre saisie,
          pensez à vous déconnecter, via le bouton Deconnexion.
        </p>
        <p className="center grey-text text-darken-2">
          Cordialement A. De Carvalho
        </p>
      </div>
    </div>
  )

  return content
}

export default ConnexionInfo
