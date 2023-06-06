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
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
}
