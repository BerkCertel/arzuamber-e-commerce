"use client";

import React from "react";

function Category() {
  const categoryList = [
    {
      name: "Ayakkabı",
    },
    {
      name: "Çanta",
    },
    {
      name: "Giyim",
    },
    {
      name: "Aksesuar",
    },
    {
      name: "Elektronik",
    },
    {
      name: "Kozmetik",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 md:p-8">
      {categoryList.map((category, i) => (
        <div
          key={i}
          className="flex items-center justify-center cursor-pointer border border-gray-300 text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-800 rounded-full shadow-md transition-all duration-300 ease-in-out min-w-[120px] px-4 py-2 text-center text-sm md:text-base"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Category;
