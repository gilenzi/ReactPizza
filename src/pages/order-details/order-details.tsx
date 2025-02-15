import {
  LoaderFunctionArgs,
  useFetcher,
  useLoaderData,
} from "react-router-dom";
import { getOrder } from "../../services/api-restaurant";
import { Container } from "../../ui/container/container";
import { Row } from "../../ui/row/row";
import { CartItems } from "../../ui/cart-items/cart-items";
import {
  OrderTitle,
  OrderTag,
  OrderEstimatedContainer,
  OrderEstimatedTitle,
  OrderEstimatedText,
  OrderSummary,
  OrderSummaryText,
  OrderPayText,
} from "./styles";
import { useEffect } from "react";
import { LoaderSpinner } from "../../components/loader/styles";
import { calcMinutesLeft, formatdDate } from "../../utils/utils";
import { CartItem, MenuItem } from "../../state/cart/cart-slice";

export function OrderDetails() {
  const fetcher = useFetcher();

  const {
    estimatedDelivery,
    cart,
    id,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = useLoaderData();

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) fetcher.load("/menu");
  }, [fetcher]);

  let cartItemsIngredients = [];
  if (fetcher.data?.data) {
    const { data: menuData } = fetcher.data;

    cartItemsIngredients = cart.map((cartItem: CartItem) => {
      const { ingredients } = menuData.find(
        (menuItem: MenuItem) => menuItem.id === cartItem.pizzaId
      );
      return ingredients || [];
    });
  }

  return (
    <Container>
      <Row styles={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <OrderTitle>Order #{id} status</OrderTitle>
        <Row>
          {priority && (
            <OrderTag style={{ marginRight: "1rem" }} modifier="primary">
              Priority
            </OrderTag>
          )}
          <OrderTag modifier="success">{status} order</OrderTag>
        </Row>
      </Row>
      <OrderEstimatedContainer>
        <OrderEstimatedTitle>
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : `Order should have arrived.`}
        </OrderEstimatedTitle>
        <OrderEstimatedText>
          (Estimated delivery: {formatdDate(estimatedDelivery)})
        </OrderEstimatedText>
      </OrderEstimatedContainer>
      {fetcher.state === "loading" ? (
        <Row
          styles={{
            justifyContent: "center",
            alignItems: "center",
            height: "6rem",
          }}
        >
          <LoaderSpinner />
        </Row>
      ) : (
        <CartItems cartItems={cart} ingredients={cartItemsIngredients} />
      )}
      <OrderSummary>
        <OrderSummaryText>Price pizza: ${orderPrice}</OrderSummaryText>
        {priority && (
          <OrderSummaryText>Price priority: ${priorityPrice}</OrderSummaryText>
        )}
        <OrderPayText>
          To pay on delivery: €{orderPrice + priorityPrice}
        </OrderPayText>
      </OrderSummary>
    </Container>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (id) {
    const order = await getOrder(id);
    return order;
  }
}
