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
    <div className="category-container p-4 md:p-8">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 gap-6   ">
          {categories.map((category, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center cursor-pointer border border-gray-200 text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-900 rounded-lg shadow-lg transition-all p-6 transform hover:scale-105"
            >
              <span className="font-semibold text-lg">{category.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
