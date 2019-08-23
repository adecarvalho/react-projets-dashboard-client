import React, { useState } from "react"
import FormDescription from "./FormDescription"

const PostDescription = ({ sujet, onSubmitNewPost }) => {
  const [toggle, setToggle] = useState(false)
  //
  function onFormDescriptionSubmit(datas) {
    onSubmitNewPost(datas)
    setToggle(false)
  }
  //
  function toggleHandler() {
    setToggle(!toggle)
  }
  //
  const containt = (
    <React.Fragment>
      <div className="row center">
        <div className="col s8">
          <h4>{sujet && sujet.name}</h4>
        </div>
        <div className="col s4">
          <button
            onClick={toggleHandler}
            className="btn-floating btn-large waves-effect waves-light blue-grey lighten-1"
          >
            <span style={{ fontSize: "2rem" }}>+</span>
          </button>
        </div>
      </div>
      {/** */}
      {/* <div className="row"> */}
      {/*  <div className="col s12"> */}
      {toggle ? (
        <FormDescription onFormDescriptionSubmit={onFormDescriptionSubmit} />
      ) : null}
      {/* </div> */}
      {/* </div> */}
      {/** */}
    </React.Fragment>
  )

  //
  return containt
}

export default PostDescription
