"use client";

import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { HiArrowSmDown } from "react-icons/hi";
import { Product } from "@/constans/productProps";
import Image from "next/image";
import TextClip from "../../utils/TextClip";

interface ProductsSliderItemProps {
  product: Product;
}

function ProductsSliderItem({ product }: ProductsSliderItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex justify-center items-center flex-col shadow rounded border hover:shadow-2xl transition duration-500 h-[400px] p-5 sm:w-full md:w-[250px] lg:w-[300px] xl:w-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-2 rounded-xl">
        <div
          className={`flex flex-col items-start justify-start top-6 left-5 space-y-3 z-50 absolute inset-0 ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <button className="text-white bg-black p-1 rounded hover:opacity-65">
            <IoCart className="text-sm" />
          </button>
          <button className="text-white bg-black p-1 rounded hover:opacity-65">
            <FaHeart className="text-sm" />
          </button>
          <button
            onClick={() => {}}
            className="text-white bg-black p-1 rounded hover:opacity-65"
          >
            <IoMdEye className="text-sm" />
          </button>
        </div>

        <small className="absolute z-30 top-12 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-thirdDark w-14 h-7 ">
          <FaStar className="size-3 mr-1" />
          {product?.reviews?.length > 0 ? product.reviews[0].rating : "0"}
        </small>

        <small className="absolute z-30 top-4 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-red-600 w-14 h-7 ">
          <HiArrowSmDown className="text-xl" />%
          {Math.round(product.discountPercent)}
        </small>

        <Image
          className={`absolute object-cover w-[200px] h-[300px] rounded transition-opacity duration-700 border ${
            isHovered ? "opacity-0" : "opacity-100 z-20"
          }`}
          src={product?.image[0]}
          alt={product.name}
          width={250}
          height={300}
          quality={100}
        />

        <Image
          className={`w-[200px] h-[300px] object-cover rounded transition-opacity duration-700 border ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          src={product?.image[1]}
          alt={product.name}
          width={250}
          height={300}
          quality={100}
        />
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
