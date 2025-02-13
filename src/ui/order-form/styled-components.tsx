import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  &:not(:last-child) {
    margin-bottom: 1.3rem;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${({theme: {colors}}) => colors.dark};
  margin-right: 2rem;
  min-width: 8rem;
`;

export const FormInput = styled.input`
  color: ${({theme: {colors}}) => colors.dark};
  border-radius: 100px;
  padding: 0.5rem 1rem;
  width: 100%;

  border: none;
  outline: none;
  transition: all 0.2s linear;
`;

export const FormCheckbox = styled.input`
  color: ${({theme: {colors}}) => colors.dark};
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: all 0.2s linear;
  accent-color: ${({theme: {colors}}) => colors.primary};
`;

export const ErrorMessage = styled.p`
  color: ${({theme: {colors}}) => colors.danger};
  padding-left: 10rem;
  padding-top: 0.5rem;
`;
