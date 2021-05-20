import React from 'react';
import { connect } from 'react-redux';
import { intervals } from '../../../assets/intervals';
import MiniDrum from '../../drum/MiniDrum';
import {
  InfoContainer,
  List,
  ListItem,
  ScaleContainer,
  ScaleHeader,
} from './scale.styles';

const Scale = ({ info, scale }) => {
  let prevSemitones = scale[info.rootIndex].intervalMap[0].semitones;

  const lists = scale[info.rootIndex].intervalMap.reduce(
    (lists, { compound, note, octaves, semitones }, i) => {
      const noteNumber = scale[i].isExtra
        ? `b${scale[i].localIndex + 1}`
        : `${scale[i].localIndex}`;

      const scaleSteps = compound > 0 ? compound : Math.min(octaves * 12, 12);

      const scaleInterval =
        scaleSteps === 0 ? 'Root' : intervals[scaleSteps].name;

      const relativeSteps = semitones - prevSemitones;

      lists.noteNumbers.push(noteNumber);
      lists.notes.push(note);
      lists.scaleIntervals.push(scaleInterval);
      // lists.scaleSteps.push(scaleSteps);
      lists.relativeSteps.push(relativeSteps);
      prevSemitones = semitones;

      return lists;
    },
    {
      noteNumbers: [],
      notes: [],
      // scaleSteps: [],
      scaleIntervals: [],
      relativeSteps: [],
    }
  );

  return (
    <ScaleContainer>
      <ScaleHeader>{`${info.rootName} ${info.name}`}</ScaleHeader>
      <InfoContainer>
        <MiniDrum />
        <List>
          <>
            <ListItem>
              <strong>#</strong>
            </ListItem>
            {lists.noteNumbers.map((text, i) => (
              <ListItem key={i}>{text}</ListItem>
            ))}
          </>
        </List>
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
