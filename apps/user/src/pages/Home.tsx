import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MANUFACTURERS, GET_PRODUCTS } from "../gql";

export default function Home() {
  const { loading, data } = useQuery(GET_MANUFACTURERS);
  const { data: data2 } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Loading...</h1>; //TODO

  return (
    <div className="">
      {data?.manufacturers.map((man) => (
        <p key={man._id}>{man.name}</p>
      ))}
      {data2?.products.map((p, i) => (
        <p key={i}>{p.title}</p>
      ))}
    </div>
  );
}
