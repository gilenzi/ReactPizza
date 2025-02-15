import styled, { css } from "styled-components";

export const OrderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  margin-bottom: 2rem;
`;

interface IOrderTag {
  modifier?: string;
}

export const OrderTag = styled.span<IOrderTag>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.25rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.25rem 0.75rem;
  background-color: orange;
  border-radius: 50px;
  margin-bottom: 2rem;

  ${({ modifier, theme }) => {
    switch (modifier) {
      case "primary":
        return css`
          background-color: ${theme.colors.danger};
        `;
      case "success": {
        return css`
          background-color: ${theme.colors.success};
        `;
      }
    }
  }}
`;

export const OrderEstimatedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.25rem 1.5rem;
  background-color: lightgray;
`;

export const OrderEstimatedTitle = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

export const OrderEstimatedText = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  background-color: lightgray;
  margin-top: 2rem;
`;

export const OrderSummaryText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.dark};
`;

export const OrderPayText = styled.h4`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
`;
