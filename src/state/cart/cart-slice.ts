import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface CartItem {
  pizzaId: number;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {items} = state;
      const addedItem = action.payload;

      const isInCartInd = items.findIndex(
        (cartItem) => cartItem.pizzaId === addedItem.id
      );

      if (isInCartInd !== -1) {
        const existingItem = items[isInCartInd];
        items[isInCartInd] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          totalPrice: existingItem.quantity * existingItem.unitPrice,
        };
      } else {
        items.push(addedItem);
      }

      state.total = items.reduce(
        (acc, item) => item.quantity * item.unitPrice + acc,
        0
      );
    },
    removeFromCart: (state, {payload: {pizzaId}}) => {
      const newCartItems = state.items.filter(
        (item) => item.pizzaId !== pizzaId
      );
      state.items = newCartItems;
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQty: (state, {payload: {pizzaId}}) => {
      const updatedCartItemIndex = state.items.findIndex(
        (item) => item.pizzaId === pizzaId
      );
      if (updatedCartItemIndex !== -1) {
        state.items[updatedCartItemIndex].quantity += 1;
        state.items[updatedCartItemIndex].totalPrice =
          state.items[updatedCartItemIndex].quantity *
          state.items[updatedCartItemIndex].unitPrice;
        calcTotal(state);
      } else {
        console.warn(`Pizza with ID ${pizzaId} not found.`);
      }
    },
    decreaseQty: (state, {payload: {pizzaId}}) => {
      const updatedCartItemIndex = state.items.findIndex(
        (item) => item.pizzaId === pizzaId
      );
      const updatedCartItem = state.items[updatedCartItemIndex];
      if (updatedCartItem && updatedCartItem.quantity > 0) {
        state.items[updatedCartItemIndex].quantity -= 1;
        state.items[updatedCartItemIndex].totalPrice =
          state.items[updatedCartItemIndex].quantity *
          state.items[updatedCartItemIndex].unitPrice;
        calcTotal(state);
      }
    },
  },
});

function calcTotal(state: CartState) {
  const {items} = state;
  state.total = items.reduce(
    (acc, item) => item.quantity * item.unitPrice + acc,
    0
  );
}

const selectCartItems = (state: RootState) => state.cart.items;

export const getPizzaQty = createSelector(
  [selectCartItems, (_state: RootState, id: number) => id],
  (items, id) => items.find((item) => item.pizzaId === id)?.quantity || 0
);

export const {addToCart, removeFromCart, increaseQty, decreaseQty, clearCart} =
  cartSlice.actions;

export default cartSlice.reducer;
