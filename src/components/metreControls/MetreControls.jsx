import React from 'react';

const MetreControls = ({
  timeSignature,
  subdivision,
  setTimeSignature,
  setSubdivision,
  disabled = false,
}) => {
  const [, beatValue] = timeSignature.split('/');

  const handleTimeChange = (e) => {
    const [, newBeatValue] = e.target.value.split('/');

    setTimeSignature(e.target.value);

    if (newBeatValue > subdivision) {
      setSubdivision(newBeatValue);
    }
  };

  return (
    <>
      <label>
        Time signature:
        <select
          value={timeSignature}
          disabled={disabled}
          onChange={handleTimeChange}
        >
          <optgroup label="Simple metre">
            <option value={'2/4'}>2/4</option>
            <option value={'3/4'}>3/4</option>
            <option value={'4/4'}>4/4</option>
            <option value={'5/4'}>5/4</option>
            <option value={'7/8'}>7/8</option>
          </optgroup>
          <optgroup label="Compound metre">
            <option value={'c6/8'}>6/8</option>
            <option value={'c9/8'}>9/8</option>
            <option value={'c12/8'}>12/8</option>
          </optgroup>
        </select>
      </label>
      <label>
        Beat subdivision:
        <select
          value={subdivision}
          disabled={disabled}
          onChange={(e) => setSubdivision(e.target.value)}
        >
          <option value={4} disabled={beatValue > 4}>
            4ths
          </option>
          <option value={8} disabled={beatValue > 8}>
            8ths
          </option>
          <option value={16} disabled={beatValue > 16}>
            16ths
          </option>
        </select>
      </label>
    </>
  );
};

export default MetreControls;
