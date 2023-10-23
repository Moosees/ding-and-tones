import React, { useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCloseOnEsc from '../../hooks/useCloseOnEsc';
import { setCurrentDropdown } from '../../redux/ui/ui.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import {
  Arrow,
  Dropdown,
  DropdownColumn,
  DropdownContent,
} from './beatDropdown.styles';
import { createSoundLists } from './beatDropdown.utils.js.js';
import DropdownControls from './controls/DropdownControls';
import { DropdownContext } from './handler/DropdownHandler';
import DropdownHandItems from './items/DropdownHandItems';
import DropdownSoundItems from './items/DropdownSoundItems';

const BeatDropdown = ({
  beatId,
  dropdownPosRef,
  nonScaleNotes,
  toggleMultiSelect,
}) => {
  const dispatch = useDispatch();
  const { sharpNotes, scale } = useSelector(({ scale }) => ({
    sharpNotes: scale.info.sharpNotes,
    scale: scale.parsed.pitched,
  }));

  const { borderHeight, borderWidth, listScroll } = useContext(DropdownContext);
  const { offsetTop, offsetLeft } = dropdownPosRef.current;
  const openTop = offsetTop - listScroll - 20 > borderHeight / 2;
  const openLeft = offsetLeft > borderWidth / 2;

  const { round, extra, dings, percussive } = useMemo(
    () => createSoundLists(scale, sharpNotes),
    [scale, sharpNotes]
  );

  useCloseOnEsc(() => dispatch(setCurrentDropdown(null)));

  return (
    <>
      <Arrow openTop={openTop} />
      <Dropdown openLeft={openLeft} openTop={openTop}>
        <DropdownControls beatId={beatId} />
        <DividerLine small />
        <DropdownContent>
          <DropdownColumn>
            <DropdownSoundItems beatId={beatId} soundList={dings} />
            <DropdownSoundItems beatId={beatId} soundList={round} />
            {!!nonScaleNotes.length && (
              <>
                <DividerLine small />
                <DropdownSoundItems
                  beatId={beatId}
                  soundList={nonScaleNotes}
                  nonScaleNotes
                />
              </>
            )}
          </DropdownColumn>
          <DropdownColumn>
            <DividerLine vertical small />
          </DropdownColumn>
          <DropdownColumn>
            <DropdownSoundItems beatId={beatId} soundList={extra} />
            <DividerLine small />
            <DropdownSoundItems beatId={beatId} soundList={percussive} />
            <DividerLine small />
            <DropdownHandItems beatId={beatId} />
          </DropdownColumn>
        </DropdownContent>
      </Dropdown>
    </>
  );
};

export default BeatDropdown;
