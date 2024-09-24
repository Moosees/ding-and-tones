import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DISCORD } from '../../oauth';
import { List, MainHeading, StartContainer, SubHeading } from './start.styles';

const Start = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log({ pathname });

  useEffect(() => {
    if (pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, [navigate, pathname]);

  return (
    <StartContainer>
      <header>
        <MainHeading>
          Welcome to <span>Ding and Tones</span>
        </MainHeading>
        <SubHeading>
          - Scales, chords and tabs for handpans and tongue drums
        </SubHeading>
      </header>
      <section>
        <h3>Recent updates:</h3>
        <List>
          <li>New start page, you are seeing it right now. Hi!</li>
          <li>Discord server, see below for link</li>
          <li>Performance updates</li>
        </List>
      </section>
      <section>
        <h3>Planned updates:</h3>
        <List>
          <li>Design and usability improvements</li>
          <li>Support for tongue drums, mutant drums and custom note layout</li>
          <li>Revamped chords page and chords in songwriter</li>
        </List>
      </section>
      <footer>
        If you have any questions, feedback or just want to say hi,{' '}
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
