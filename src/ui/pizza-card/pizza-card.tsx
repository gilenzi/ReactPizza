import Button from "../button/button";
import {
  Card,
  ContentWrapper,
  StyledImage,
  Description,
  PizzaName,
  Ingredients,
  Price,
  SoldOutText,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getPizzaQty } from "../../state/cart/cart-slice";
import { AddToCart } from "../../components/add-to-cart/add-to-cart";
import { RootState } from "../../state/store";
import { IMenuItem } from "../../pages/menu/menu";

export default function PizzaCard({ data }: { data: IMenuItem }) {
  const { name, imageUrl, ingredients, unitPrice, soldOut, id } = data;
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(addToCart({ pizzaId: id, name, unitPrice, quantity: 1 }));
  }

  const pizzaQty = useSelector((state: RootState) => getPizzaQty(state, id));

  return (
    <>
      <Card>
        <ContentWrapper>
          <StyledImage
            src={imageUrl}
            sold-out={soldOut.toString()}
            alt={`Cover image for ${name}`}
          />
          <Description>
            <PizzaName>{name}</PizzaName>
            <Ingredients>{ingredients.join(", ")}</Ingredients>
            {!soldOut ? (
              <Price>$ {unitPrice.toFixed(2)}</Price>
            ) : (
              <SoldOutText>Sold out</SoldOutText>
            )}
          </Description>
        </ContentWrapper>
        {pizzaQty >= 1 && <AddToCart count={pizzaQty} pizzaId={id} />}
        {!soldOut && pizzaQty < 1 && (
          <Button style={{ marginBottom: "0.8rem" }} onClick={addToCartHandler}>
            Add to cart
          </Button>
        )}
      </Card>
    </>
  );
}
