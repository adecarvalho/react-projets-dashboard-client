import React from "react"

const ErrorsInfo = ({ errors }) => {
  return (
    <div>
      <p className="errors-content center">{errors}</p>
    </div>
  )
}

export default ErrorsInfo
