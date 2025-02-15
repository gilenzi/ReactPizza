import { AddToCart } from "../../components/add-to-cart/add-to-cart";
import { CartItem } from "../../state/cart/cart-slice";
import { Row } from "../row/row";
import { CartItemIngredient, CartItemsList, CartListItem } from "./styles";

type SingleIngredient = string[];

interface CartItemsProps {
  cartItems: CartItem[];
  ingredients?: SingleIngredient[];
}

export function CartItems({ cartItems, ingredients }: CartItemsProps) {
  const calcTotal = (item: CartItem) => item.quantity * item.unitPrice;

  return (
    <CartItemsList>
      {cartItems.map((item: CartItem, ind: number) => {
        if (item.quantity === 0) return null;
        return (
          <CartListItem key={item.pizzaId}>
            <Row
              styles={{
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ marginBottom: "0.8rem" }}>
                {item.quantity} x {item.name}
              </span>
              <Row
                styles={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "1.5rem", marginBottom: "0.8rem" }}>
                  ${calcTotal(item)}
                </span>
                {!ingredients && (
                  <AddToCart count={item.quantity} pizzaId={item.pizzaId} />
                )}
              </Row>
            </Row>
            {ingredients && ingredients.length > 0 && (
              <CartItemIngredient>
                {ingredients[ind].join(", ")}
              </CartItemIngredient>
            )}
          </CartListItem>
        );
      })}
    </CartItemsList>
  );
}
