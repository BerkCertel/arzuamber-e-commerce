"use client";

import Image from "next/image";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import Button from "../general/Button";
import Comment from "./Comment";
import Heading from "../general/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem } from "@/store/cartSlice";
import { RootState } from "../../../store/store";
import { CardProductProps, Product, Review } from "@/constans/Props";
import Rating from "@mui/material/Rating";
import Carousel from "react-multi-carousel";
import TextClip from "../utils/TextClip";
import { IoShareSocialSharp } from "react-icons/io5";
import { Alert, Snackbar } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import PageContainer from "../Containers/PageContainer";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface productProps {
  product: Product;
}

const DetailClient = ({ product }: productProps) => {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.cart.carts);

  const [cardProduct, setcardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.images[0],
    inStock: product.inStock,
  });

  const increaseFunc = () => {
    if (cardProduct.quantity === 10) return;
    setcardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const descreaseFunc = () => {
    if (cardProduct.quantity === 1) return;
    setcardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const addToBasket = () => {
    const data = {
      id: product?.id,
      name: product?.name,
      image: product.images[0],
      price: product?.price,
      quantity: cardProduct?.quantity,
      description: product?.description || "No description",
      inStock: product?.inStock || false,
      size: product.sizes,
    };
    dispatch(addToCart(data));
  };

  const [displayButton, setDisplayButton] = useState<boolean>(false);

  useEffect(() => {
    const isProductInCart = carts.some(
      (cart: CartItem) => cart.id === product.id
    );
    if (isProductInCart) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }

    if (product.inStock === false) {
      setDisplayButton(false);
    }
  }, [carts, product.id, product.inStock]);

  // Ürün indirim oranını hesaplama
  const discountPercent = product.discountPercent || 0;
  const discountedPrice = (product.price * (1 - discountPercent / 100)).toFixed(
    2
  );

  // Rating hesaplama
  const productRating =
    product?.reviews && product.reviews.length > 0
      ? product.reviews.reduce(
          (acc: number, item: Review) => acc + (item.rating || 0),
          0
        ) / product.reviews.length
      : 0;

  const ratingResult = isNaN(productRating) ? 0 : productRating;

  const [open, setOpen] = useState(false);

  // line clamp state
  const [lineClamp, setLineClamp] = useState<boolean>(false);

  const handleClamp = () => {
    setLineClamp(!lineClamp);
  };

  // copy link func
  const copyPath = () => {
    const productUrl = window.location.href;
    navigator.clipboard
      .writeText(productUrl)
      .then(() => {
        setOpen(true);
      })
      .catch((err) => {
        console.error("Link kopyalanırken hata oluştu", err);
      });
  };

  // more details func
  const handleClose = () => {
    setOpen(false);
  };

  // sizes select func
  const handleSizeSelect = (size: string) => {
    console.log(size);
  };

  console.log(product);

  return (
    <PageContainer>
      <div className="detail-page-main-div my-5">
        <div className="flex flex-col lg:flex-row  justify-center items-start md:items-center lg:items-start gap-8 p-8 bg-gray-50 rounded-lg shadow-xl mb-10 w-full h-full ">
          {/* Image Section with Carousel */}
          <div className=" w-full md:w-1/2 h-[500px] relative">
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              transitionDuration={500}
            >
              {product.images.map((img, index) => (
                <div key={index} className=" w-full h-[500px] relative ">
                  <Image
                    className="object-contain absolute"
                    src={img}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-2">
              {/* Product Name*/}
              <h1 className=" capitalize  text-4xl lg:text-3xl font-serif font-extrabold text-secondaryDark text-center">
                {TextClip(product.name)}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 text-lg">
                <Rating
                  name="read-only"
                  value={ratingResult}
                  precision={0.5}
                  readOnly
                  size="large"
                />
              </div>
            </div>
            <hr className="w-full border-black" />

            {/* price and category */}
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-center w-full gap-3">
              <div className="text-2xl font-semibold text-primary border  rounded-lg px-2 border-myblack">
                {discountPercent > 0 ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className=" text-myblack text-4xl">
                      {discountedPrice}₺
                    </span>
                    <span className="line-through text-red-500 text-md">
                      {product.price.toFixed(2)}₺
                    </span>
                  </div>
                ) : (
                  <span>{product.price.toFixed(2)}₺</span>
                )}
              </div>
              <div
                className={`flex items-center justify-center gap-1 text-md font-thin  p-2 rounded-lg  text-mywhite bg-primary capitalize "
              `}
              >
                <span className="font-semibold">Kategori: </span>
                {product.category}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <p
                className={`font-sans text-gray-700 text-md leading-relaxed ${
                  lineClamp ? "line-clamp-4" : ""
                }`}
              >
                {product.description}
              </p>
              <span
                onClick={handleClamp}
                className="w-full mt-1 text-primary text-md font-bold cursor-pointer  hover:underline text-end no-underline"
              >
                {lineClamp ? "Daha fazla" : "Daha az"}
              </span>
            </div>

            {/* Stock Status */}
            <div className="w-full flex justify-between items-center ">
              <div
                className={` flex items-center justify-center text-lg font-semibold  p-2 rounded-lg  text-mywhite ${
                  product.inStock ? "bg-primary " : "bg-thirdLight"
                }`}
              >
                {product.inStock ? <p>Stock In</p> : <p>Out Of Stock</p>}
              </div>

              <div className="flex gap-2 ">
                {product.sizes.map((size, i) => (
                  <Button
                    key={i}
                    onClick={() => handleSizeSelect(size)}
                    outline
                    primary
                    animation
                    size="icon"
                    text={`${size}`}
                  />
                ))}
              </div>
            </div>

            {/* Counter and Add to Cart Button */}
            <div className="w-full flex justify-between  md:justify-center  items-center gap-4 flex-wrap">
              <div className="w-full flex flex-row :flex-col justify-center items-center gap-10 lg:gap-8">
                <div className="w-1/4">
                  <Counter
                    increaseFunc={increaseFunc}
                    descreaseFunc={descreaseFunc}
                    cardProduct={cardProduct}
                  />
                </div>
                <div className="w-3/4">
                  <Button
                    disabled={displayButton || !product.inStock}
                    onClick={addToBasket}
                    text={
                      displayButton
                        ? "Ürün Sepette Mevcut"
                        : product.inStock
                        ? "Sepete Ekle"
                        : "Ürün Stokta Yok"
                    }
                    outline={!displayButton && product.inStock}
                    primary
                    size="large"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end items-center gap-4">
                <Button
                  disabled={displayButton}
                  onClick={addToBasket}
                  outline={displayButton}
                  primary
                  icon={FaHeart}
                  size="icon"
                  animation={!displayButton}
                />

                <Button
                  onClick={copyPath}
                  primary
                  size="icon"
                  icon={IoShareSocialSharp}
                  iconSize={25}
                  animation
                />

                {/* Snackbar bildirim */}
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    className="w-full"
                  >
                    Paylaşım linki kopyalandı!
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
        </div>

        <Heading text="Yorumlar" center textSize="3xl" color="white" />

        {/* Reviews Section */}
        <div className="mt-8 space-y-4">
          {product?.reviews?.map((prd: Review) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default DetailClient;
