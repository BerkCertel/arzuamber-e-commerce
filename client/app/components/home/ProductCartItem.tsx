"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { HiArrowSmDown, HiCheckCircle, HiXCircle } from "react-icons/hi";
import Image from "next/image";
import { Product, Review } from "@/constans/Props";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import TextClip from "../utils/TextClip";

interface ProductsSliderItemProps {
  product: Product;
}

function ProductCartItem({ product }: ProductsSliderItemProps) {
  const [isHovered, setIsHovered] = useState(false);
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
      className="group flex flex-col justify-between shadow-md border border-thirdDark rounded-lg bg-white hover:shadow-lg transition duration-300 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Görsel Alanı */}
      <div className="relative w-full h-60 ">
        <Image
          src={isHovered ? product?.image[1] : product?.image[0]}
          alt={product.name}
          fill
          className="object-contain p-3  transition-transform duration-300"
        />
        <div className="absolute top-5 left-5 flex flex-col gap-2 opacity-100 group-hover:opacity-100 transition-opacity md:opacity-0">
          <button className="w-8 h-8 grid items-center justify-center bg-primary text-mywhite rounded-lg hover:bg-primaryLight hover:scale-110 transition-all shadow-md">
            <IoCart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 grid items-center justify-center bg-secondary text-mywhite rounded-lg hover:bg-secondaryLight hover:text-primary hover:scale-110 transition-all shadow-md">
            <FaHeart className="w-4 h-4" />
          </button>
          <button
            onClick={handleRoute}
            className="w-8 h-8 grid items-center justify-center bg-third text-mywhite rounded-lg hover:bg-thirdLight hover:scale-110 transition-all shadow-md"
          >
            <IoMdEye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Ürün Detayları */}
      <div className="p-4 flex flex-col gap-2">
        <Rating
          name="read-only"
          value={ratingResult}
          precision={0.5}
          readOnly
        />
        <small className="flex items-center bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold w-2/6">
          <HiArrowSmDown className="text-lg" />%
          {Math.round(product.discountPercent)}
        </small>

        <h2 className="font-bold text-xl text-gray-800 line-clamp-2">
          {TextClip(product.name)}
        </h2>
        <div>
          <p className="text-gray-500 text-sm line-through">
            Original: {product.price}₺
          </p>
          <p className="text-green-600 font-semibold text-sm">
            Discounted:{" "}
            {(
              product.price -
              (product.price * product.discountPercent) / 100
            ).toFixed(2)}
            ₺
          </p>
        </div>
        <div className="flex items-center justify-between">
          {product.inStock ? (
            <small className="flex items-center bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              <HiCheckCircle className="mr-1" />
              In Stock
            </small>
          ) : (
            <small className="flex items-center bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              <HiXCircle className="mr-1" />
              Out of Stock
            </small>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCartItem;
