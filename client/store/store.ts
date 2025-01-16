import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    general: generalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
