"use client";

import Image from "next/image";
import PageContainer from "../Containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import Button from "../general/Button";
import Comment from "./Comment";
import Heading from "../general/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem } from "@/store/cartSlice";
import { RootState } from "../../../store/store";
import { CardProductProps, Product, Review } from "@/constans/Props";

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
    images: product.images,
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
      image: product?.images,
      price: product?.price,
      quantity: cardProduct?.quantity,
      description: product?.description || "No description",
      inStock: product?.inStock || false,
    };
    dispatch(addToCart(data));
  };

  const [displayButton, setDisplayButton] = useState<boolean>(false);

  useEffect(() => {
    setDisplayButton(false);
    const controlDisplay = carts.findIndex(
      (cart: CartItem) => cart.id == product.id
    );

    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [carts, product.id]);

  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image src={product.images} alt={product.name} fill priority />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <div className="text-2xl font-semibold text-primary">
            ${product.price}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 text-lg">
            <span>Stok Durumu:</span>
            {product.inStock ? (
              <p className="text-green-500 font-semibold">Ürün Stokta</p>
            ) : (
              <p className="text-red-500 font-semibold">
                Ürün Stokta Bulunmamakta
              </p>
            )}
          </div>

          {/* Counter and Add to Cart Button */}
          <div className="flex items-center gap-4">
            <Counter
              increaseFunc={increaseFunc}
              descreaseFunc={descreaseFunc}
              cardProduct={cardProduct}
            />

            {displayButton ? (
              <Button
                disabled
                onClick={addToBasket}
                text="Ürün Sepette Mevcut"
                outline
              />
            ) : (
              <Button onClick={addToBasket} text="Sepete Ekle" />
            )}
          </div>
        </div>
      </div>

      <Heading text="Yorumlar" />

      {/* Reviews Section */}
      <div className="mt-8">
        {product?.reviews?.map((prd: Review) => (
          <Comment key={prd.id} prd={prd} />
        ))}
      </div>
    </PageContainer>
  );
};

export default DetailClient;
