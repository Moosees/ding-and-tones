import React from 'react';
import { metreList } from '../../../assets/metre';
import { MetreLabel, MetreSelect } from './metreControls.styles';

const MetreControls = ({
  metre,
  setMetre,
  subdivision,
  setSubdivision,
  small,
  disabled,
}) => {
  const { minSubdivision } = metreList[metre];

  const handleTimeChange = (e) => {
    const { minSubdivision } = metreList[e.target.value];

    setMetre(e.target.value);

    if (minSubdivision > subdivision) {
      setSubdivision(minSubdivision);
    }
  };

  return (
    <>
      {setMetre && (
        <MetreLabel small={small}>
          {!small && <span>Metre:</span>}
          <MetreSelect
            small={small}
            value={metre}
            disabled={disabled}
            onChange={handleTimeChange}
          >
            <optgroup label="Simple metre">
              <option value={'s24'}>2/4</option>
              <option value={'s34'}>3/4</option>
              <option value={'s44'}>4/4</option>
              <option value={'s54'}>5/4</option>
            </optgroup>
            <optgroup label="Compound metre">
              <option value={'c68'}>6/8</option>
              <option value={'c98'}>9/8</option>
              <option value={'c128'}>12/8</option>
            </optgroup>
            <optgroup label="Complex metre">
              <option value={'x223'}>7/8 - 2-2-3</option>
              <option value={'x232'}>7/8 - 2-3-2</option>
              <option value={'x322'}>7/8 - 3-2-2</option>
              <option value={'x233'}>8/8 - 2-3-3</option>
              <option value={'x323'}>8/8 - 3-2-3</option>
              <option value={'x332'}>8/8 - 3-3-2</option>
            </optgroup>
          </MetreSelect>
        </MetreLabel>
      )}
      {setSubdivision && (
        <MetreLabel small={small}>
          {!small && <span>Subdivision:</span>}
          <MetreSelect
            small={small}
            value={subdivision}
            disabled={disabled}
            onChange={(e) => setSubdivision(e.target.value)}
          >
            <option value={4} disabled={minSubdivision > 4}>
              4ths
            </option>
            <option value={8} disabled={minSubdivision > 8}>
              8ths
            </option>
            <option value={16} disabled={minSubdivision > 16}>
              16ths
            </option>
          </MetreSelect>
        </MetreLabel>
      )}
    </>
  );
};

export default MetreControls;
