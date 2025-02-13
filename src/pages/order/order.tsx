import styled from 'styled-components';
import {Container} from '../../ui/container/container';
import {OrderForm} from '../../ui/order-form/order-form';

const OrderTitle = styled.h2`
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 2rem;
`;

export function Order(props: any) {
  return (
    <Container>
      <OrderTitle>Ready to order? Let's go!</OrderTitle>
      <OrderForm />
    </Container>
  );
}
