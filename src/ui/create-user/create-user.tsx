import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from '../../state/store';
import {setUsername} from '../../state/user/user-slice';
import Button from '../button/button';
import {CreateUserWrapper, InputName} from './styles';

export function CreateUser() {
  const [user, setUser] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const validUsername = user.length >= 3;

  const buttonStyle = {marginTop: '2rem'};

  function handleUser(e: React.ChangeEvent<HTMLInputElement>) {
    const user = e.target.value;
    setUser(user);
  }

  function startOrderingHandler() {
    // if (validUsername) {
    dispatch(setUsername(user));
    navigate('menu');
    // }
  }

  return (
    <CreateUserWrapper>
      <InputName onInput={handleUser} placeholder="Your full name" />

      {validUsername && (
        <Button onClick={startOrderingHandler} style={buttonStyle}>
          Start ordering
        </Button>
      )}
    </CreateUserWrapper>
  );
}
