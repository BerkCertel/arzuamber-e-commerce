"use client";

import { CarouselType } from "@/constans/HomeSlider";
import Image from "next/image";
import React from "react";

interface ImageProps {
  image: CarouselType;
}

function HomeSliderItem({ image }: ImageProps) {
  return (
    <div className="relative w-full h-64 md:h-[600px]">
      <Image
        src={image.url}
        alt={image.description ? image.description : "Slider Description"}
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}

export default HomeSliderItem;
