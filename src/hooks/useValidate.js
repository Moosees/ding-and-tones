import { useEffect, useState } from 'react';

const validateInput = (value, type) => {
  let errors = [];
  let alphaNum = /^[.,_-\w\s]+$/g;

  switch (type) {
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

const useValidate = (defaultValue, callback, type) => {
  const [value, setValue] = useState(defaultValue || '');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newErrors = validateInput(value, type);
      setErrors(newErrors);
      if (!newErrors.length) callback(value);
    }, 1000);

    if (!value) return clearTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [value, type, callback]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange, errors];
};

export default useValidate;
