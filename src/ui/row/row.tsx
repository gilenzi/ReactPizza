import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
`;

interface RowProps {
  children: React.ReactNode;
  styles?: Record<string, string | Object>;
}

export function Row({children, styles}: RowProps) {
  return <StyledRow style={styles}>{children}</StyledRow>;
}
