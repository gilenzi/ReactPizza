import styled from 'styled-components';
import {StyledButton} from '../../ui/button/button';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
  color: ${({theme: {colors}}) => colors.dark};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-top: 4rem;
`;

export const TitleDescription = styled.h2`
  color: ${({theme: {colors}}) => colors.light};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

export const WelcomeDescription = styled.h4`
  color: ${({theme: {colors}}) => colors.dark};
  font-size: ${({theme: fontSizes}) => fontSizes.sm};
  text-align: center;
  margin-top: ${({theme: {spacers}}) => spacers.sm};
`;

export const ButtonLink = styled(Link)`
  padding: 0.625rem 1.25rem;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  height: fit-content;
  border: none;
  letter-spacing: 0.025em;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
`;
