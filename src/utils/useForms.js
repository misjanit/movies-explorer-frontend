import { useCallback, useState } from 'react';

export default function useFormValidity(defaultValues = {}) {

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  localStorage.setItem('formState', isValid);

  const handleChange = useCallback(
    (evt) => {
    const input = evt.target;
    const { name } = input;
    const { value } = input;
    const error = input.validationMessage;
    const isFormValid = input.closest('form').checkValidity();

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

    setIsValid(isFormValid)
  }, [setValues],
  )
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
    localStorage.removeItem('formState');
  },
    [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors };
};
