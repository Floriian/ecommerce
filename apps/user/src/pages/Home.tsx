import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MANUFACTURERS, GET_PRODUCTS } from "../gql";
import { ProductCard } from "../components";

export default function Home() {
  const { data, loading } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Loading...</h1>; //TODO

  return (
    <>
      <div className="md:flex w-full gap-2 mt-2">
        {data?.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
