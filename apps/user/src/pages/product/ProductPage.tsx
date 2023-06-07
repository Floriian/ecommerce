import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../gql";
import placeholder from "../../assets/placeholder.png";
export default function ProductPage() {
  const { id } = useParams();
  const { data } = useQuery(GET_PRODUCT, {
    variables: {
      id,
    },
  });

  const product = data?.product;

  const img = product?.image === "" ? placeholder : product?.image;

  const handleClick = () => {
    return;
  };

  return (
    <>
      <div className="flex">
        <div>
          <img src={img} alt="" className="max-w-4xl rounded-md" />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-xl underline underline-offset-2 text-center">
            {product?.title}
          </h1>
          <div className="p-2">
            <p className="text-gray-900">{product?.description}</p>
            <p>On stock: {product?.amount}</p>
            <button
              className="p-2 text-white rounded-md bg-green-700"
              onClick={() => handleClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {/* <InterestedProduct
          manufacturerName={product?.title!}
          products={product}
        /> */}
      </div>
    </>
  );
}
