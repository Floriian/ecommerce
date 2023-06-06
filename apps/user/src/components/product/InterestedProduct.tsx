import React from "react";
import { TProduct } from "@ecommerce/types";
import { ProductCard } from ".";

type Props = {
  product: TProduct[];
  manufacturerName: string;
};

export function InterestedProduct({ product, manufacturerName }: Props) {
  const sameManufacturer = product?.filter(
    (p) => p.manufacturer.name === manufacturerName
  );

  return (
    <div>
      {sameManufacturer.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
