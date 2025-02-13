import styled from 'styled-components';
import {BaseInput, getThemeKey} from '../../config/global-components';

export const CreateUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputName = styled(BaseInput)`
  max-width: 18rem;
  border-radius: 50px;
  /* margin-top: ${({theme: {spacers}}) => spacers.sm}; */
  margin-top: ${getThemeKey('spacers').sm};
`;
