import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MANUFACTURERS } from "../gql";

export default function Home() {
  const { loading, data } = useQuery(GET_MANUFACTURERS);

  if (loading) return <h1>Loading...</h1>; //TODO

  return (
    <div className="">
      {data?.manufacturers.map((man) => (
        <p key={man._id}>{man.name}</p>
      ))}
    </div>
  );
}
