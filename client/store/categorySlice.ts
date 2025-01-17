import { categoryList } from "@/constans/Categories";
import { Category } from "@/constans/Props";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  categories: Category[];
  loading: boolean;
}

const initialState: CartState = {
  categories: categoryList,
  loading: false,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
