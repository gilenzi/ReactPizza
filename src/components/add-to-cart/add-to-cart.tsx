import styled from 'styled-components';
import Button from '../../ui/button/button';
import {Row} from '../../ui/row/row';
import {useDispatch} from 'react-redux';
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from '../../state/cart/cart-slice';

const Count = styled.span`
  font-weight: 500;
  line-height: 1.25rem;
  color: rgb(68, 64, 60);
  font-size: 1.2rem;
  padding: 0 0.5rem;
`;

interface AddToCartProps {
  count: number;
  pizzaId: number;
}

export function AddToCart({count, pizzaId}: AddToCartProps) {
  const dispatch = useDispatch();

  function removeHandler() {
    dispatch(removeFromCart({pizzaId}));
  }

  function increaseHandler() {
    dispatch(increaseQty({pizzaId}));
  }

  function decreaseHandler() {
    dispatch(decreaseQty({pizzaId}));
  }

  return (
    <Row styles={{justifyContent: 'space-between'}}>
      <Row styles={{alignItems: 'center', marginRight: '0.5rem'}}>
        <Button onClick={decreaseHandler}>-</Button>
        <Count>{count}</Count>
        <Button onClick={increaseHandler}>+</Button>
      </Row>
      <Button onClick={removeHandler}>Delete</Button>
    </Row>
  );
}
