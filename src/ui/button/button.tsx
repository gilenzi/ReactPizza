import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  modifier?: "outline" | "primary" | "danger";
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  height: fit-content;
  font-weight: 600;
  outline: none;
  border: none;
  letter-spacing: 0.025em;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s linear;

  &:focus {
    outline: 2px solid ${({ theme: { colors } }) => colors.primary};
    outline-offset: 2px;
  }

  ${({ modifier }) => {
    switch (modifier) {
      case "outline":
        return css`
          background: transparent;
          color: #333;
          border: 2px solid #333;

          &:hover {
            background: #333;
            color: white;
          }
        `;
      case "primary":
        return css`
          background: blue;
          color: white;
          border: none;

          &:hover {
            background: darkblue;
          }
        `;
      case "danger":
        return css`
          background: red;
          color: white;
          border: none;

          &:hover {
            background: darkred;
          }
        `;
      default:
        return css`
          color: ${(props) => props.theme.colors.dark};
          background-color: ${(props) => props.theme.colors.primary};
        `;
    }
  }}
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => buttonRef.current!);

    return (
      <StyledButton ref={buttonRef} {...props}>
        {children}
      </StyledButton>
    );
  }
);
export default Button;
