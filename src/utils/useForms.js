import { useCallback, useState } from 'react';
import validator from "validator"

export default function useFormValidity(defaultValues = {}) {

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  localStorage.setItem('formState', isValid);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    const error = input.validationMessage;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    setIsValid((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    if (input.name !== "email") {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: input.validationMessage });
      setIsValid(input.closest('form').checkValidity());
    } else {
      setValues({ ...values, [name]: value });

      if (!validator.isEmail(input.value)) {
        setErrors({
          ...errors, [name]: "Недопустимый формат почты"
        });
        setIsValid(false);
        if (input.value === '' || input.value === null) {
          setErrors({
            ...errors, [name]: "Поле обязательно для заполнения"
          });
          setIsValid(false);
        }
      } else {
        setErrors({
          ...errors, [name]: ""
        });
        setIsValid(true);
      }
    }
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
    localStorage.removeItem('formState');
  },
    [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors };
};
