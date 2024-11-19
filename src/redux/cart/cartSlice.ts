import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps, CartProps } from "../../types/cart";

const initialState: { cart: CartProps } = {
  cart: {
    items: [],
    totalAmount: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      // Check if the item already exists in the cart
      const existingItem = state.cart.items.find(
        (item: CartItemProps) => item._id === action.payload._id
      );

      if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the item does not exist, add it as a new item to the cart
        state.cart.items.push({
          ...action.payload,
          quantity: action.payload.quantity, // Make sure to set the initial quantity
        });
      }

      // Always update the total amount, ensuring correct calculation
      state.cart.totalAmount += action.payload.price * action.payload.quantity;
    },
    incrementQuantity: (state, action) => {
      const item: CartItemProps = state.cart.items.find(
        (item: CartItemProps) => item._id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item: CartItemProps = state.cart.items.find(
        (item: CartItemProps) => item._id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem: CartProps = state.cart.items.filter(
        (item: CartItemProps) => item._id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
