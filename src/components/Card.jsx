import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Card({ title, img, amount, discount }) {
  const dispatch = useDispatch();

  const addInCart = () => {
    dispatch(
      addToCart({
        id: Math.random().toString(36).substring(2, 9),
        title,
        image: img,
        price: 0,
        quantity: 1,
      })
    );
  };

  return (
    <div className="border-2 flex justify-center items-center bg-white p-2">
      <div className="flex flex-col items-center mt-2">
        <img src={img} alt="" className="h-56" />
        <h4 className="font-semibold">{title.length > 100 ? title.substring(0, 90) + "..." : title}</h4>
        <div className="flex flex-row w-full items-start gap-10 mt-2">
          <div className="font-bold">{amount}</div>
          <div className="line-through">MRP: {discount}</div>
        </div>
        <button
          className="bg-yellow-400 w-28 mt-4 rounded-xl p-1 mb-2"
          onClick={addInCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
