import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../../assets/intervals';
import MiniDrum from '../../drum/MiniDrum';
import { InfoContainer, List, ListItem, ScaleContainer } from './scale.styles';

const Scale = ({ info, scale }) => {
  console.log({ info, scale });
  const noteList = scale[0].intervalMap.map((note, i) => {
    return <ListItem key={i}>{note.note}</ListItem>;
  });

  const intervalList = scale[0].intervalList.map((interval, i) => {
    let intervalName = intervals[interval % 12].name;
    if (interval % 12 === 0) intervalName = 'Octave';
    if (interval === 0) intervalName = 'Root';

    return <ListItem key={i}>{intervalName}</ListItem>;
  });

  return (
    <ScaleContainer>
      <h1>{`${info.rootName} ${info.name}`}</h1>
      <h3>{info.label}</h3>
      <InfoContainer>
        <MiniDrum />
        <List>{noteList}</List>
        <List>{intervalList}</List>
      </InfoContainer>
    </ScaleContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  info: scale.info,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Scale);
