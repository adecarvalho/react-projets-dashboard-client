import React from "react"
import CardSujet from "./CardSujet"

const SujetsList = ({ sujets }) => {
  //
  return sujets.map(item => {
    return (
      <CardSujet
        key={item._id}
        id={item._id}
        name={item.name}
        description={item.description}
      />
    )
  })
}

export default SujetsList
