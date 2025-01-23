"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../utils/Loading";

function Category() {
  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );

  return (
    <div className="category-container p-3 md:p-8">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-3   ">
          {categories.map((category, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center cursor-pointer border border-gray-200 text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-900 rounded-lg shadow-lg transition-all transform hover:scale-105 h-[40px] md:h[70px]"
            >
              <span className="font-semibold  text-xs md:text-sm lg:text-lg capitalize">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

{
  /* <span className="text-4xl mb-2">
{React.createElement(category.icon)} 
</span> */
}

export default Category;
