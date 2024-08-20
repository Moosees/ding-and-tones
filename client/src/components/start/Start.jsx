import styled from 'styled-components';
import { DISCORD } from '../../oauth';

const StartContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Start = () => {
  return (
    <StartContainer>
      <a
        href={`https://discord.gg/${DISCORD}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        Discord
      </a>
    </StartContainer>
  );
};

export default Start;
