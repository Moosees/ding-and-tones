import { useEffect, useState } from 'react';

const validateInput = (value, validationType) => {
  let errors = [];
  let alphaNum = /^[.,_-\w\s]+$/g;

  switch (validationType) {
    case 'title':
      if (!alphaNum.test(value))
        errors.push('Title cannot contain special characters');
      if (value.length < 4) errors.push('Title is too short');
      if (value.length > 30) errors.push('Title is too long');
      break;

    case 'username':
      if (!alphaNum.test(value))
        errors.push('Username cannot contain special characters');
      if (value.length < 3) errors.push('Username is too short');
      if (value.length > 20) errors.push('Username is too long');
      break;

    default:
      errors = ['Type is unknown'];
      break;
  }

  return errors;
};

const useValidate = (validationType, defaultValue) => {
  const [value, setValue] = useState(defaultValue || '');
  const [errors, setErrors] = useState([]);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(false);

    const timeout = setTimeout(() => {
      const newErrors = validateInput(value, validationType);
      setErrors(newErrors);

      if (!newErrors.length) setIsValid(true);
    }, 400);

    if (!value) return clearTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [value, validationType]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue(defaultValue || '');
  };

  return [value, handleChange, errors, isValid, resetValue];
};

export default useValidate;
