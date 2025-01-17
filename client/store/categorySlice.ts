import { Category } from "@/constans/Props";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  categories: Category[];
  loading: boolean;
}

export const categoryList = [
  {
    name: "Ayakkabı",
  },
  {
    name: "Çanta",
  },
  {
    name: "Giyim",
  },
  {
    name: "Aksesuar",
  },
  {
    name: "Elektronik",
  },
  {
    name: "Kozmetik",
  },
];

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
