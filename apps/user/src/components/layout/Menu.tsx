import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export function Menu() {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const cartColor = cart.products.length === 0 ? "" : "text-green-500";

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="flex w-full justify-between gap-2 bg-blue-400 bg-opacity-90 p-2 rounded-b-lg sticky top-0 items-center">
      <div className="text-xl font-bold text-white">
        Simple GraphQL E-Commerce
      </div>
      <div className="flex gap-2">
        {/* {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i}>Lorem</div>
        ))} */}
      </div>
      <div className="text-2xl hover:cursor-pointer" onClick={handleClick}>
        <div className="relative">
          <BsFillCartFill className={cartColor + " text-4xl"} />
          {cart.products.length > 0 ? (
            <div className="absolute -right-2 -top-0 text-sm text-white font-bold bg-red-500 pl-2 pr-2 rounded-full text-center">
              {cart.products.length}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
