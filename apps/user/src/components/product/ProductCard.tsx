import React from "react";
import placeholder from "../../assets/placeholder.png";
import { TProduct } from "@ecommerce/types";

type Props = {
  product: TProduct;
};

export function ProductCard({ product }: Props) {
  const img = product.image === "" ? placeholder : product.image;
  return (
    <div className="max-w-xl border-2 rounded-md flex flex-col w-full md:w-[576px] p-2 gap-4 justify-between">
      <div>
        <img
          src={img}
          alt="Product image"
          loading="lazy"
          className="inline-block align-middle object-contain aspect-square"
        />
        <h1 className="font-bold text-xl ">{product.title}</h1>
        <h2 className="font-thin text-gray-500">{product.manufacturer.name}</h2>
      </div>
      <div className="">
        <p className="text-gray-800">{product.description}</p>
      </div>

      <button className="bg-green-500 text-white p-2 text-xl rounded-md hover:bg-green-700 transition-colors duration-150">
        Add to cart
      </button>
    </div>
  );
}
