import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../../assets/intervals';
import MiniDrum from '../../drum/MiniDrum';
import { InfoContainer, List, ListItem, ScaleContainer } from './scale.styles';

const Scale = ({ info, scale }) => {
  let prevSemitones = scale[info.rootIndex].intervalMap[0].semitones;

  const lists = scale[info.rootIndex].intervalMap.reduce(
    (lists, { compound, note, octaves, semitones }) => {
      const scaleSteps = compound > 0 ? compound : Math.min(octaves * 12, 12);

      const scaleInterval =
        scaleSteps === 0 ? 'Root' : intervals[scaleSteps].name;

      const relativeSteps = semitones - prevSemitones;

      lists.notes.push(note);
      lists.scaleIntervals.push(scaleInterval);
      // lists.scaleSteps.push(scaleSteps);
      lists.relativeSteps.push(relativeSteps);
      prevSemitones = semitones;

      return lists;
    },
    {
      notes: [],
      // scaleSteps: [],
      scaleIntervals: [],
      relativeSteps: [],
    }
  );

  return (
    <ScaleContainer>
      <h1>{`${info.rootName} ${info.name}`}</h1>
      <h3>{info.label}</h3>
      <InfoContainer>
        <MiniDrum />
        <List>
          <>
            <ListItem>
              <strong>Note</strong>
            </ListItem>
            {lists.notes.map((text, i) => (
              <ListItem key={i}>{text}</ListItem>
            ))}
          </>
        </List>
        <List>
          <ListItem>
            <strong>Interval</strong>
          </ListItem>
          <>
            {lists.scaleIntervals.map((text, i) => (
              <ListItem key={i}>{text}</ListItem>
            ))}
          </>
        </List>
        {/* <List>
          <ListItem>
            <strong>Steps</strong>
          </ListItem>
          <>
            {lists.scaleSteps.map((text, i) => (
              <ListItem key={i}>{text}</ListItem>
            ))}
          </>
        </List> */}
        <List>
          <ListItem>
            <strong>Steps</strong>
          </ListItem>
          <>
            {lists.relativeSteps.map((text, i) => (
              <ListItem key={i}>{text}</ListItem>
            ))}
          </>
        </List>
      </InfoContainer>
    </ScaleContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  info: scale.info,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Scale);
