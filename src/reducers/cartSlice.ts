import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../utils/types';

interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  data: CartProduct[];
}

const initialState: CartState = {
  data: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{id: string; quantity: number}>,
    ) => {
      const {id, quantity = 1} = action.payload;

      const existingProductIndex = state.data.findIndex(
        (item: any) => item.id === id,
      );

      if (existingProductIndex >= 0) {
        state.data[existingProductIndex] = {
          ...state.data[existingProductIndex],
          quantity: state.data[existingProductIndex].quantity + 1,
        };
      } else {
        //@ts-ignore
        state.data.push({...action.payload, quantity});
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{id: string; quantity: number}>,
    ) => {
      const {id, quantity = 1} = action.payload;

      const existingProductIndex = state.data.findIndex(
        (item: any) => item.id === id,
      );

      if (existingProductIndex >= 0) {
        if (state.data[existingProductIndex].quantity == 1) {
          state.data.splice(existingProductIndex, 1);
        } else {
          state.data[existingProductIndex] = {
            ...state.data[existingProductIndex],
            quantity: state.data[existingProductIndex].quantity - 1,
          };
        }
      } else {
        //@ts-ignore
        state.data.push({...action.payload, quantity});
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
