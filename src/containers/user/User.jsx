import React from 'react';
import ControlsButton from '../../components/button/ControlsButton';
import DividerLine from '../../components/dividerLine/DividerLine';
import {
  AvatarContainer,
  ButtonGroup,
  Buttons,
  UserContainer,
} from './user.styles';

const User = () => {
  return (
    <UserContainer>
      <AvatarContainer>
        <i className="material-icons" style={{ fontSize: 'inherit' }}>
          face
        </i>
      </AvatarContainer>
      <Buttons>
        <ButtonGroup flexEnd>
          {/* PlayButton component?? */}
          <ControlsButton label="Play" icon="play_arrow" />
          {/* <ControlsButton label="Play" icon="pause" /> */}
          <ControlsButton label="Sound" icon="hearing" />
          <ControlsButton label="Print" icon="print" />
        </ButtonGroup>
        <DividerLine vertical isSmall />
        <ButtonGroup>
          <ControlsButton reverse label="Help" icon="help_outline" />
          <ControlsButton reverse label="Account" icon="person_outline" />
          <ControlsButton reverse label="Sign Out" icon="directions_run" />
        </ButtonGroup>
      </Buttons>
    </UserContainer>
  );
};

export default User;
