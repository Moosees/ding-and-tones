import React from 'react';

const Checkbox = ({ label }) => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
