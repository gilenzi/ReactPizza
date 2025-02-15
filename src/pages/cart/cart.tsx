import { Link } from "react-router-dom";
import { Column } from "../../ui/column/column";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Row } from "../../ui/row/row";
import { clearCart } from "../../state/cart/cart-slice";
import Button from "../../ui/button/button";
import { ButtonLink } from "../home/styles";
import { Container } from "../../ui/container/container";
import { CartTitle, CartTitleEmpty } from "./styles";
import { CartItems } from "../../ui/cart-items/cart-items";

export function Cart() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.user);
  const { items: cartItems } = useSelector((state: RootState) => state.cart);

  function clearCartHandler() {
    dispatch(clearCart());
  }

  if (cartItems.length === 0)
    return (
      <Column styles={{ height: "100vh" }}>
        <CartTitleEmpty>Your cart is empty</CartTitleEmpty>
        <Link to={"/menu"}>← Back to menu</Link>
      </Column>
    );

  return (
    <Container>
      <Column styles={{ overflow: "auto" }}>
        <Link to={"/menu"}>← Back to menu</Link>
        <CartTitle>Your cart, {username}</CartTitle>
        <CartItems cartItems={cartItems} />
        <Row styles={{ alignItems: "center", flexWrap: "wrap" }}>
          <ButtonLink
            to="/order/new"
            style={{
              marginRight: "1rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Order Pizzas
          </ButtonLink>
          <Button modifier={"outline"} onClick={clearCartHandler}>
            Clear cart
          </Button>
        </Row>
      </Column>
    </Container>
  );
}
