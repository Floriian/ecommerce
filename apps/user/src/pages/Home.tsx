import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../gql";
import { ProductCard } from "../components";

export default function Home() {
  const { data, loading } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Loading...</h1>; //TODO

  return (
    //md:flex w-full gap-2 mt-2 flex-wrap justify-center flex-col md:flex-row
    <div className="flex w-full gap-2 flex-wrap justify-center">
      {data?.products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
