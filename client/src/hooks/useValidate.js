import { useEffect, useState } from 'react';

const validateInput = (value, validationType) => {
  const num = /^[\d]+$/g;
  const alphaNum = /^[.,_-\w\s]+$/g;
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

    case 'title': {
      const trimmedValue = value.trim();
      if (!alphaNum.test(trimmedValue))
        errors.push('Title cannot contain special characters');
      if (trimmedValue.length < 4) errors.push('Title is too short');
      if (trimmedValue.length > 30) errors.push('Title is too long');
      break;
    }

    case 'username': {
      const trimmedValue = value.trim();
      if (!alphaNum.test(trimmedValue))
        errors.push('Username cannot contain special characters');
      if (trimmedValue.length < 4) errors.push('Username is too short');
      if (trimmedValue.length > 20) errors.push('Username is too long');
      break;
    }

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

  return [value, handleChange, errors, isValid, resetValue, setValue];
};

export default useValidate;
