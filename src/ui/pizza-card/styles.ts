import styled from 'styled-components';
import {getThemeKey} from '../../config/global-components';

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style: none;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.8rem;
  &:not(:last-child) {
    margin-bottom: ${getThemeKey('spacers').sm};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledImage = styled.img<{['sold-out']?: string}>`
  height: 10rem;
  max-width: 100%;
  filter: ${(props) => (props['sold-out'] === 'true' ? `grayscale(1)` : '')};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PizzaName = styled.h4`
  font-weight: 500;
  color: ${getThemeKey('colors').dark};
  font-size: 1.2rem;
  font-style: italic;
  text-transform: capitalize;
`;

export const Ingredients = styled.p`
  font-style: italic;
  text-transform: capitalize;
  color: rgb(120 113 108);
`;

export const Price = styled(Ingredients).attrs({as: 'span'})`
  font-size: ${getThemeKey('fontSizes').md};
  margin-top: ${getThemeKey('spacers').md};
`;

export const SoldOutText = styled.p`
  color: ${getThemeKey('colors').dark};
  font-size: ${getThemeKey('fontSizes').md};
  text-transform: uppercase;
  margin-top: auto;
  font-weight: 600;
`;
