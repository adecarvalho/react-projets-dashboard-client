import joi from "@hapi/joi"

const schemaRegister = {
  username: joi
    .string()
    .trim()
    .min(2)
    .required(),
  email: joi
    .string()
    .trim()
    .min(2)
    .email()
    .required(),
  password: joi
    .string()
    .trim()
    .min(6)
    .required(),
  confirmPassword: joi
    .string()
    .trim()
    .min(6)
    .required()
}
//
const schemaLogin = {
  email: joi
    .string()
    .trim()
    .min(2)
    .email()
    .required(),
  password: joi
    .string()
    .trim()
    .min(6)
    .required()
}

//
export function validationFormLogin(datas) {
  const isvalid = joi.validate(datas, schemaLogin)

  if (isvalid.error) {
    const res = isvalid.error.details[0].message
    //
    if (res.includes("email")) {
      return {
        validate: false,
        error: "Adresse email non valide"
      }
    }
    //
    else if (res.includes("password")) {
      return {
        validate: false,
        error: "Problème avec la saisie du password"
      }
    }
  } else {
    return {
      validate: true,
      error: ""
    }
  }
}

//
export function validationFormRegister(datas) {
  const isvalid = joi.validate(datas, schemaRegister)

  //
  if (isvalid.error) {
    const res = isvalid.error.details[0].message
    //
    if (res.includes("username")) {
      return {
        validate: false,
        error: "Problème avec la saisie du Nom"
      }
    } else if (res.includes("email")) {
      return {
        validate: false,
        error: "Adresse email non valide"
      }
    } else if (res.includes("password")) {
      return {
        validate: false,
        error: "Problème avec la saisie du password"
      }
    } else if (res.includes("confirmPassword")) {
      return {
        validate: false,
        error: "Problème avec la saisie du password de confirmation"
      }
    }
  } else {
    return {
      validate: true,
      error: ""
    }
  }
}
