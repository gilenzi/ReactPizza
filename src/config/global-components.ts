import styled from 'styled-components';
import {theme} from './theme';

export const BaseInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: 16rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  outline: none;
  border: none;
  transition: all 0.15s linear;
  outline: 2px solid transparent;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.light};
    outline-offset: 2px;
  }
`;

export const getThemeKey = (key: string) => {
  const themeValue = theme[key];
  if (themeValue) {
    return themeValue;
  }
  return {};
};
