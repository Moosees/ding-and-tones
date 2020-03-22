import React from 'react';

const PatternControls = ({ bpm, setBpm, timeSignature, setTimeSignature }) => (
  <div>
    <label>
      Beats per minute:
      <input
        type="number"
        min="50"
        max="160"
        value={bpm}
        onChange={e => setBpm(Number(e.target.value))}
      />
    </label>
    <label>
      Time signature:
      <select
        value={timeSignature}
        onChange={e => setTimeSignature(e.target.value)}
      >
        <option value={'4/4'}>4/4</option>
        <option value={'3/4'}>3/4</option>
      </select>
    </label>
  </div>
);

export default PatternControls;
