import React from "react";
import placeholder from "../../assets/placeholder.png";
import { TProduct } from "@ecommerce/types";
import { useNavigate } from "react-router-dom";

type Props = {
  product: TProduct;
};

export function ProductCard({ product }: Props) {
  const img = product.image === "" ? placeholder : product.image; //TODO

  const navigate = useNavigate();

  const handleClick = (id: string) => navigate(`/product/${id}`);

  return (
    <div className="max-w-[300px] border-2 rounded-md flex flex-col w-full md:w-[576px] p-2 gap-4 justify-between">
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

      <div className="flex w-full gap-4 justify-center">
        <button className="bg-green-500 text-white p-2 text-xl rounded-md hover:bg-green-700 transition-colors duration-150">
          Add to cart
        </button>
        <button
          className="bg-blue-500 text-white p-2 text-xl rounded-md hover:bg-blue-700 transition-colors duration-150"
          onClick={() => handleClick(product._id)}
        >
          See more
        </button>
      </div>
    </div>
  );
}
