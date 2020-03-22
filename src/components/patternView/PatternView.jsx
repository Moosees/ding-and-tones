import React, { useState } from 'react';
import PatternBar from '../patternBar/PatternBar';
import PatternControls from '../patternControls/PatternControls';
import { BarsContainer } from './PatternView.styles';

const PatternView = () => {
  const [bpm, setBpm] = useState(90);
  const [timeSignature, setTimeSignature] = useState('3/4');

  return (
    <div>
      <PatternControls
        bpm={bpm}
        setBpm={setBpm}
        timeSignature={timeSignature}
        setTimeSignature={setTimeSignature}
      />
      <BarsContainer>
        <PatternBar timeSignature={timeSignature} />
        <PatternBar timeSignature={timeSignature} />
      </BarsContainer>
    </div>
  );
};

export default PatternView;
