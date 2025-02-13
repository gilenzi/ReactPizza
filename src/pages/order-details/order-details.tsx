import {useLoaderData} from 'react-router-dom';
import {getOrder} from '../../services/api-restaurant';
import {Container} from '../../ui/container/container';
import {Row} from '../../ui/row/row';
import styled, {css} from 'styled-components';

const OrderTitle = styled.h2`
  color: ${({theme}) => theme.colors.dark};
  font-size: ${({theme}) => theme.fontSizes.lg};

  margin-bottom: 2rem;
`;

interface IOrderTag {
  modifier?: string;
}

const OrderTag = styled.span<IOrderTag>`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.25rem;
  font-size: ${({theme}) => theme.fontSizes.sm};
  padding: 0.25rem 0.75rem;
  background-color: orange;
  border-radius: 50px;
  margin-bottom: 2rem;

  ${({modifier, theme}) => {
    switch (modifier) {
      case 'primary':
        return css`
          background-color: ${theme.colors.danger};
        `;
      case 'success': {
        return css`
          background-color: ${theme.colors.success};
        `;
      }
    }
  }}
`;

const OrderEstimatedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background-color: lightgray;
`;

const OrderEstimatedTitle = styled.h3`
  font-weight: 500;
  color: ${({theme}) => theme.colors.dark};
`;

const OrderEstimatedText = styled.h3`
  color: ${({theme}) => theme.colors.dark};
  font-size: ${({theme}) => theme.fontSizes.sm};
`;

export function OrderDetails(props) {
  const {
    customer,
    estimatedDelivery,
    cart,
    id,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = useLoaderData();
  return (
    <Container>
      <Row styles={{justifyContent: 'space-between'}}>
        <OrderTitle>Order #{id} status</OrderTitle>
        <Row>
          <OrderTag style={{marginRight: '1rem'}} modifier="primary">
            Priority
          </OrderTag>
          <OrderTag modifier="success">Preparing order</OrderTag>
        </Row>
      </Row>
      <OrderEstimatedContainer>
        <OrderEstimatedTitle>Only 36 minutes left 😃</OrderEstimatedTitle>
        <OrderEstimatedText>
          (Estimated delivery: Feb 13, 04:32 PM)
        </OrderEstimatedText>
      </OrderEstimatedContainer>
    </Container>
  );
}

export async function loader({params}) {
  const {id} = params;
  const order = await getOrder(id);
  return order;
}
