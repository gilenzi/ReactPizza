import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
`;

export const HeaderTitle = styled(Link)`
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.dark};
  min-width: fit-content;
`;

export const HeaderUsername = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-transform: uppercase;
  color: ${({theme: {colors}}) => colors.dark};
  min-width: fit-content;
`;
