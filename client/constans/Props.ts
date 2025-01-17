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
  image: string[];
  stock: number;
  reviews: Review[];
}

export interface Category {
  name: string;
}
