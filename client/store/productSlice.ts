import { createSlice } from "@reduxjs/toolkit";
//  PayloadAction
import { Product } from "@/constans/Props";
import { products } from "@/constans/Product";

// Sepet Tipi
export interface CartState {
  products: Product[];
  //   product: Product |null;
  loading: boolean;
}

// Başlangıç durumu (initialState)
const initialState: CartState = {
  products: products,
  //   product:{}
  loading: false,
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// Reducer'ları dışa aktarma
export const {} = cartSlice.actions;

export default cartSlice.reducer;
