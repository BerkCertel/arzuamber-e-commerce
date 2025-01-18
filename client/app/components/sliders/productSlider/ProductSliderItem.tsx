"use client";

import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { HiArrowSmDown, HiCheckCircle, HiXCircle } from "react-icons/hi";
import { Product, Review } from "@/constans/Props";
import Image from "next/image";
import TextClip from "../../utils/TextClip";
import Link from "next/link";

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
      className="flex justify-center items-center flex-col space-y-1  shadow rounded border hover:shadow-2xl transition duration-500 h-[500px] p-5 sm:w-full md:w-[300px] lg:w-[300px] xl:w-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-2 rounded-xl">
        <div
          className={`flex flex-col items-start justify-start top-6 left-5 space-y-3 z-50 absolute inset-0 ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center w-8 h-8 bg-primary text-mywhite rounded-lg hover:bg-primaryLight hover:scale-110 transition-all shadow-md">
              <IoCart size={18} />
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-secondary text-mywhite rounded-lg hover:bg-secondaryLight hover:text-primary hover:scale-110 transition-all shadow-md">
              <FaHeart size={16} />
            </button>
            <Link
              href={`/product/${product.id}`}
              className="flex items-center justify-center w-8 h-8 bg-third text-mywhite rounded-lg hover:bg-thirdLight hover:scale-110 transition-all shadow-md z-50"
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
      <div className="flex justify-center items-center gap-2">
        <small className=" z-30 top-4 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-red-600 w-14 h-7 ">
          <HiArrowSmDown className="text-xl" />%
          {Math.round(product.discountPercent)}
        </small>
        <small className=" z-30 top-12 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-thirdDark w-14 h-7 ">
          <FaStar className="size-3 mr-1" />
          {product?.reviews?.length > 0 ? ratingResult : "0"}
        </small>

        {product.inStock ? (
          <small className=" z-30 top-20 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-green-600 w-14 h-7  space-x-1">
            <p>Stock</p>
            <HiCheckCircle className="text-xl" />
          </small>
        ) : (
          <small className=" z-30 top-20 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-red-600 w-14 h-7 space-x-1">
            <p>Stock</p>
            <HiXCircle className="text-xl" />
          </small>
        )}
      </div>
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
    </div>
  );
}

export default ProductsSliderItem;
