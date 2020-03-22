import React, { useState } from 'react';
import PatternBar from '../patternBar/PatternBar';
import PatternControls from '../patternControls/PatternControls';

const PatternView = () => {
  const [bpm, setBpm] = useState(90);
  const [timeSignature, setTimeSignature] = useState('4/4');

  return (
    <div>
      <PatternControls
        bpm={bpm}
        setBpm={setBpm}
        timeSignature={timeSignature}
        setTimeSignature={setTimeSignature}
      />
      <PatternBar bpm={bpm} timeSignature={timeSignature} />
    </div>
  );
};

export default PatternView;
