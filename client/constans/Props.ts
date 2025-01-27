// import { IconType } from "react-icons";
export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean | null;
  image: string;
  hashedPassword: string | null;
  createdAt: string;
  updatedAt: string;
  role: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  comment: string;
  rating: number;
  createDate: string;
  user: User;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  discountPercent: number;
  images: string[];
  reviews: Review[];
  isNewSeason: boolean;
  sizes: string[];
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};
