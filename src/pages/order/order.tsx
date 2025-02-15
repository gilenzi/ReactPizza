import { Container } from "../../ui/container/container";
import { OrderForm } from "../../ui/order-form/order-form";
import { OrderTitle } from "./styles";

export function Order() {
  return (
    <Container>
      <OrderTitle>Ready to order? Let's go!</OrderTitle>
      <OrderForm />
    </Container>
  );
}
