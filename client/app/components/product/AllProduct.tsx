"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Loading from "@/app/components/utils/Loading";
import ProductCartItem from "./ProductCartItem";
import Heading from "../general/Heading";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AllProduct() {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  // Sayfa başına ürün sayısı
  const productsPerPage = 8;

  // Sayfaları takip etmek için state
  const [currentPage, setCurrentPage] = React.useState(0);

  // Sayfa değiştiğinde çalışacak fonksiyon
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  // Sayfa başına ürünleri almak
  const offset = currentPage * productsPerPage;
  const currentProducts = products.slice(offset, offset + productsPerPage);

  // Toplam sayfa sayısını hesaplamak
  const pageCount = Math.ceil(products.length / productsPerPage);

  return (
    <main className="p-6 sm:p-8  rounded-lg">
      <Heading text="All Products" center />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 items-center p-10 md:p-10">
            {currentProducts.map((product, i) => (
              <ProductCartItem product={product} key={i} />
            ))}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <span className="flex items-center justify-center w-8 h-8 text-mywhite bg-primary rounded-md hover:bg-primaryLight">
                <FaChevronRight />
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <span className="flex items-center justify-center w-8 h-8 text-mywhite bg-primary rounded-md hover:bg-primaryLight">
                <FaChevronLeft />
              </span>
            }
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-center space-x-2 mt-4"
            pageClassName="mx-1"
            pageLinkClassName="px-3 py-1 border rounded-md text-mywhite bg-primary hover:bg-secondaryLight"
            activeClassName="font-bold rounded-md border-2 border-third bg-third text-mywhite"
            disabledClassName="text-secondaryDark cursor-not-allowed"
            breakClassName="text-secondary"
          />
        </div>
      )}
    </main>
  );
}

export default AllProduct;
