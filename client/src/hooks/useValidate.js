import { useEffect, useState } from 'react';

const validateInput = (value, validationType) => {
  let errors = [];
  let alphaNum = /^[.,_-\w\s]+$/g;

  switch (validationType) {
    case 'title':
      if (!alphaNum.test(value))
        errors.push('Title cannot contain special characters');
      if (value.length < 4)
        errors.push('Length should be at least four letters');
      if (value.length > 30) errors.push('Length should be at most 30 letters');
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
