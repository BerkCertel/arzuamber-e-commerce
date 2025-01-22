"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { Product, Review } from "@/constans/Props";
import Image from "next/image";
import TextClip from "../../utils/TextClip";
import Link from "next/link";
import { Rating } from "@mui/material";

interface ProductsSliderItemProps {
  product: Product;
}

function ProductsSliderItem({ product }: ProductsSliderItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const productRating =
    product?.reviews && product.reviews.length > 0
      ? product.reviews.reduce(
          (acc: number, item: Review) => acc + (item.rating || 0),
          0
        ) / product.reviews.length
      : 0;

  const ratingResult = isNaN(productRating) ? 0 : productRating;

  return (
    <div
      className="flex justify-center items-center flex-col space-y-1  shadow rounded-lg border hover:shadow-xl transition duration-500 h-[500px] p-5 sm:w-full md:w-[300px] lg:w-[300px] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-2 rounded-xl">
        <div
          className={`flex flex-col items-start justify-start top-6 left-5 space-y-3 z-50 absolute inset-0 ${
            isHovered ? "visible" : " visible md:invisible"
          }`}
        >
          <div className="flex flex-col gap-2 w-full transition-all ">
            <button className="flex items-center justify-center w-8 h-8 bg-primary text-mywhite rounded-lg hover:bg-primaryLight hover:scale-110  shadow-md">
              <IoCart size={18} />
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-secondary text-mywhite rounded-lg hover:bg-secondaryLight hover:text-primary hover:scale-110 shadow-md">
              <FaHeart size={16} />
            </button>
            <Link
              href={`/product/${product.id}`}
              className="flex items-center justify-center w-8 h-8 bg-third text-mywhite rounded-lg hover:bg-thirdLight hover:scale-110 shadow-md z-50"
            >
              <IoMdEye size={18} />
            </Link>
          </div>
        </div>

        <Image
          className={`absolute object-cover w-[200px] h-[300px] rounded transition-opacity duration-700 border ${
            isHovered ? "opacity-0" : "opacity-100 z-20"
          }`}
          src={product?.images[0]}
          alt={product.name}
          width={250}
          height={300}
          quality={100}
        />

        <Image
          className={`w-[200px] h-[300px] object-cover rounded transition-opacity duration-700 border ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          src={product?.images[1]}
          alt={product.name}
          width={250}
          height={300}
          quality={100}
        />
      </div>
      <Rating name="read-only" value={ratingResult} precision={0.5} readOnly />
      <div className="flex justify-center items-center gap-2"></div>
      <h2 className="font-bold text-lg mt-2">{TextClip(product?.name)}</h2>
      <hr className="w-3/4" />
      <p className="text-slate-500 text-xs">
        Original Price: <span className="line-through">{product.price}₺</span>
      </p>
      <p className="text-green-600 text-sm">
        Discounted Price:
        <strong>
          {(
            product.price -
            (product.price * product.discountPercent) / 100
          ).toFixed(2)}
          ₺
        </strong>
      </p>

      <div className="flex items-center justify-center w-full">
        {product.inStock ? (
          <small className="flex items-center justify-center bg-secondary text-white text-md px-2 py-1 rounded-full w-full ">
            <HiCheckCircle className="mr-1" />
            In Stock
          </small>
        ) : (
          <small className="flex items-center justify-center bg-third text-white text-md  px-2 py-1 rounded-full w-full ">
            <HiXCircle className="mr-1" />
            Out of Stock
          </small>
        )}
      </div>
    </div>
  );
}

export default ProductsSliderItem;
