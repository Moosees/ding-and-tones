import React from 'react';

// All possible sounds available on current scale
export const createOptions = (scale) => {
  const options = [
    <option key={'P'} value={'P'}>
      Pause
    </option>,
    <option key={'T'} value={'T'}>
      Tak
    </option>,
  ];
  for (let i = 0; i < scale.length; ++i) {
    options.push(
      <option key={`${i}`} value={i}>
        {`${i}-${scale[i]}`}
      </option>
    );
  }
  return options;
};
