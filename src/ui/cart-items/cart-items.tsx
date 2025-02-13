import {AddToCart} from '../../components/add-to-cart/add-to-cart';
import {CartItem} from '../../state/cart/cart-slice';
import {Row} from '../row/row';
import {CartItemsList, CartListItem} from './styled-components';

interface CartItemsProps {
  cartItems: CartItem[];
}

export function CartItems({cartItems}: CartItemsProps) {
  const calcTotal = (item: CartItem) => item.quantity * item.unitPrice;

  //   const renderIngredients = (cartItem) => {
  //     console.log('ing', cartItem);
  //   };

  return (
    <CartItemsList>
      {cartItems.map((item: CartItem) => {
        if (item.quantity === 0) return null;
        // renderIngredients(item);
        return (
          <CartListItem key={item.pizzaId}>
            <Row
              styles={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>
                {item.quantity} x {item.name}
              </span>
              <Row
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{marginRight: '1.5rem'}}>${calcTotal(item)}</span>
                <AddToCart count={item.quantity} pizzaId={item.pizzaId} />
              </Row>
            </Row>
          </CartListItem>
        );
      })}
    </CartItemsList>
  );
}
