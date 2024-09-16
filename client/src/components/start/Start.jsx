import styled from 'styled-components';
import { DISCORD } from '../../oauth';

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Start = () => {
  return (
    <StartContainer>
      <h1>Welcome to Ding and Tones!</h1>
      <h2>Scales, chords and tabs for handpans and tongue drums</h2>
      <section>
        <h3>Recent updates:</h3>
        <ul>
          <li>New start page, you are seeing it right now. Hi!</li>
          <li>Discord server, see below for link</li>
          <li>Performance updates</li>
        </ul>
      </section>
      <section>
        <h3>Planned updates:</h3>
        <ul>
          <li>Design and usability improvements</li>
          <li>
            Support for tongue drums, mutant drums and custome note layout
          </li>
          <li>Rewamped chords page and chords in songwriter</li>
        </ul>
      </section>
      <footer>
        If you have any questions, feedback or just want to say hi, please{' '}
        <a
          href={`https://discord.gg/${DISCORD}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          join our Discord
        </a>
      </footer>
    </StartContainer>
  );
};

export default Start;
