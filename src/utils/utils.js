const userFormValidation = (name, email, password) => {
  const validator = require('validator');
  const nameRegEx = new RegExp(/[а-яёa-z-\s]/gi);
  const validation = {
    email: false,
    name: false,
    password: false,
  };

  if (validator.isEmail(email)) {
    validation.email = true;
  }
  if (
    name.length > 1 &&
    name.length < 31 &&
    name.match(nameRegEx) &&
    name.match(nameRegEx).length === name.length
  ) {
    validation.name = true;
  }
  if (password.length > 2) {
    validation.password = true;
  }

  return validation;
};

const hoursAndMinutes = (minutes) => `${(minutes - (minutes % 60)) / 60}ч ${minutes % 60}м`;

const resEquation = (resA, resB, sizeA, sizeB) => {
  const det = resB - resA;
  const shift = (resB * sizeA - resA * sizeB) / det;
  const factor = (sizeB - sizeA) / det;
  return { shift, factor };
};

function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(res);
  } else {
    return res.json();
  }
}

module.exports = { resEquation, handleResponse, userFormValidation, hoursAndMinutes };
