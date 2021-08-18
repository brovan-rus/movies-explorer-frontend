import React, { useCallback } from 'react';
import { formValidationErrorMessage } from '../../utils/constants';
import validator from 'validator';

export function useForm() {
  const validator = require('validator');
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValidationStarted, setIsValidationStarted] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const nameRegEx = new RegExp(/[а-яёa-z-\s]/gi);

  const handleBlur = (event) => {
    const target = event.target;
    const name = target.name;
    setIsValidationStarted({ ...isValidationStarted, [name]: true });
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    if (name === 'email' && !target.validationMessage && !validator.isEmail(value)) {
      setErrors({ ...errors, [name]: formValidationErrorMessage });
      setIsValid(false);
    }
    if (
      name === 'name' &&
      !(value.match(nameRegEx) && value.match(nameRegEx).length === value.length)
    ) {
      setErrors({ ...errors, [name]: formValidationErrorMessage });
      setIsValid(false);
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValidationStarted = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidationStarted(newIsValidationStarted);
    },
    [setValues, setErrors, setIsValid, setIsValidationStarted],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    handleBlur,
    isValidationStarted,
  };
}
