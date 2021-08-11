import { useEffect, useState } from 'react';

const validateString = (value, name, min, max) => {
  const alphaNum = /^[.,_-\w\s]+$/g;
  const errors = [];
  const trimmedValue = value.trim();

  if (!alphaNum.test(trimmedValue))
    errors.push(`${name} cannot contain special characters`);
  if (trimmedValue.length < min) errors.push(`${name} is too short`);
  if (trimmedValue.length > max) errors.push(`${name} is too long`);

  return errors;
};

const validateInput = (value, validationType) => {
  const num = /^[\d]+$/g;
  let errors = [];

  switch (validationType) {
    case 'bpm': {
      if (!num.test(value)) {
        errors.push('Please enter a whole number');
        break;
      }
      if (value < 40) errors.push('Min 40 bpm');
      if (value > 180) errors.push('Max 180 bpm');
      break;
    }

    case 'title':
      errors = validateString(value, 'Title', 4, 30);
      break;

    case 'username':
      errors = validateString(value, 'Username', 4, 20);
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
    setValue(defaultValue || '');
  }, [defaultValue]);

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
