import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartOVerviewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: rgb(41, 37, 36);
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const CardDescriptionText = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;

  & span:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const CardCartLink = styled(Link)`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    color: lightgray;
  }
`;
