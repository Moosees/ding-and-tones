import React from 'react';
import { useSelector } from 'react-redux';
import { getNoteLabelFromName, intervals } from '../../../assets/intervals';
import MiniDrum from '../../drum/MiniDrum';
import {
  InfoContainer,
  List,
  ListItem,
  ScaleContainer,
  ScaleHeader,
} from './scale.styles';

const Scale = () => {
  const info = useSelector(({ scale }) => scale.info);
  const scale = useSelector(({ scale }) => scale.parsed.pitched);

  let prevSemitones = scale[info.rootIndex].intervalMap[0].semitones;

  const lists = scale[info.rootIndex].intervalMap.reduce(
    (lists, { compound, note, semitones }, i) => {
      const relativeSteps = semitones - prevSemitones;
      const isOctave = semitones % 12 === 0 && semitones !== 0;
      const { name } = intervals[isOctave ? 12 : compound];

      lists.options.push(scale[i].option);
      lists.notes.push(getNoteLabelFromName(note, info.sharpNotes));
      lists.scaleIntervals.push(name);
      lists.relativeSteps.push(relativeSteps);
      prevSemitones = semitones;

      return lists;
    },
    {
      options: [],
      notes: [],
      scaleIntervals: [],
      relativeSteps: [],
    },
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
            {lists.options.map((text, i) => (
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

export default Scale;
