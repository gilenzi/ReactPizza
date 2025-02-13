import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';
import {
  CartOVerviewWrapper,
  CardDescription,
  CardDescriptionText,
  CardCartLink,
} from './styled-components';

export default function CartOVerview() {
  const {total, items} = useSelector((state: RootState) => state.cart);
  const pizzasQty = items.reduce((acc, item) => item.quantity + acc, 0);

  if (!pizzasQty) return null;

  return (
    <CartOVerviewWrapper>
      <CardDescription>
        <CardDescriptionText>
          <span>
            {pizzasQty} {pizzasQty === 1 ? 'pizza' : 'pizzas'}
          </span>
          <span>${total}</span>
        </CardDescriptionText>
      </CardDescription>
      <CardCartLink to="/cart">Open cart →</CardCartLink>
    </CartOVerviewWrapper>
  );
}
