import styled from 'styled-components';

export const CartItemsList = styled.ul`
  list-style: none;
`;

export const CartListItem = styled.li`
  padding: 1rem;
  padding-left: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.dark};
`;
