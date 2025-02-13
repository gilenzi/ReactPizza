import * as HomeComponents from './styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';
import {CreateUser} from '../../ui/create-user/create-user';
import {ButtonLink} from './styled-components';

const {Title, TitleDescription, WelcomeSection, WelcomeDescription} =
  HomeComponents;

export default function Home() {
  const username = useSelector((state: RootState) => state.user.username);
  const buttonStyle = {marginTop: '2rem'};

  return (
    <div>
      <Title>The best pizza.</Title>
      <TitleDescription>
        Straight out of the oven, straight to you.
      </TitleDescription>
      <WelcomeSection>
        <WelcomeDescription>
          👋 Welcome! Please start by telling us your name:
        </WelcomeDescription>

        {username === '' ? (
          <CreateUser />
        ) : (
          <ButtonLink to={'/menu'} style={buttonStyle}>
            Continue Ordering, {username}
          </ButtonLink>
        )}
      </WelcomeSection>
    </div>
  );
}
