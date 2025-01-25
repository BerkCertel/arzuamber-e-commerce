"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
// import { HiCheckCircle, HiXCircle } from "react-icons/hi";
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
      className="flex justify-center items-center flex-col space-y-1  rounded-lg   transition duration-500 h-[500px] p-5 sm:w-full md:w-[300px]  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative  rounded-xl">
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
        <div className="w-[400px] h-[350px]">
          <Image
            className={`absolute object-contain  rounded transition-opacity duration-700  ${
              isHovered ? "opacity-0" : "opacity-100 z-20"
            }`}
            src={product?.images[0]}
            alt={product.name}
            fill
          />

          <Image
            className={` object-contain rounded transition-opacity duration-700  ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            src={product?.images[1]}
            alt={product.name}
            fill
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-2 w-full">
        {/* <h2 className="font-bold text-lg mt-2">{TextClip(product?.name)}</h2> */}
        <Rating
          name="read-only"
          value={ratingResult}
          precision={0.5}
          readOnly
          size="small"
        />
        <h2 className="text-start text-secondary font-bold text-md  rounded-lg w-full ">
          {TextClip(product?.name)}
        </h2>

        <hr className="w-full" />
        <p className="text-slate-500 text-xs text-s">
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
      {/* <div className="flex items-center justify-center w-full">
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
      </div> */}
    </div>
  );
}

export default ProductsSliderItem;
