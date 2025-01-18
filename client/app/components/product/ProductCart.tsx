"use client";

import TextClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Review {
  id: string;
  userId: string;
  productId: string;
  comment: string;
  rating: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image: string;
  reviews: Review[];
  stock: number;
}

interface ProductCartProps {
  product: Product;
}

function ProductCart({ product }: ProductCartProps) {
  const router = useRouter();

  const productRating =
    product?.reviews && product.reviews.length > 0
      ? product.reviews.reduce(
          (acc: number, item: Review) => acc + (item.rating || 0),
          0
        ) / product.reviews.length
      : 0;

  const ratingResult = isNaN(productRating) ? 0 : productRating;

  const handleRoute = () => {
    router.push(`product/${product.id}`);
  };

  return (
    <div
      onClick={handleRoute}
      className="w-[250px] shadow-lg p-2 flex flex-col flex-1 rounded-md cursor-pointer"
    >
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          className="object-contain"
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250px"
          alt={product.name || "Product Image"}
        />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div className="line-clamp-6">{TextClip(product.name)}</div>
        <Rating
          name="half-rating-read"
          defaultValue={ratingResult}
          precision={0.5}
          readOnly
        />
        <div className="text-primary text-lg md:text-xl font-bold">
          {product.price}
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
