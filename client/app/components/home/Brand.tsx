"use client";

import React from "react";
import Image from "next/image";
import Button from "../general/Button";
import { useRouter } from "next/navigation";

function Brand() {
  const router = useRouter();

  const handleClick = () => {
    router.push("products");
  };

  return (
    <div className="w-full h-[650px] relative my-3 md:my-10">
      <Image
        className="object-cover bg-center rounded-lg"
        src="/images/Brand/single-campaign.png"
        alt="New Season Collection"
        fill
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 text-white p-5 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          New Season Collection
        </h2>
        <p className="text-lg text-center mb-4">
          Discover the latest products that are perfect for every occasion!
        </p>

        <Button
          primary
          animation
          size="small"
          text="View Products"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Brand;
