import React from "react";
import { useAppSelector } from "../../hooks/redux";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  if (cart.products.length <= 0) return <h1>Your cart is empty!</h1>;
  return (
    <div className="flex flex-col items-center">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Manufacturer</th>
            <th>Product</th>
            <th>Product price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((product) => (
            <tr
              key={product._id}
              className="[&>tbody>*:nth-child(even)]:bg-gray-500"
            >
              <td>img</td>
              <td>{product.name}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.productAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <button className="bg-green-500 p-2 text-white font-bold hover:bg-green-600 rounded-md">
          Place order
        </button>
      </div>
    </div>
  );
}
