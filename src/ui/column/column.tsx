import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ColumnProps {
  children: React.ReactNode;
  styles?: Record<string, string | object>;
}

export function Column({children, styles}: ColumnProps) {
  return <StyledColumn style={styles}>{children}</StyledColumn>;
}
