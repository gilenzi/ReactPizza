import {configureStore} from '@reduxjs/toolkit';
import userSlice, {type UserState} from './user/user-slice';
import cartSlice, {type CartState} from './cart/cart-slice';

export interface RootState {
  user: UserState;
  cart: CartState;
}

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
