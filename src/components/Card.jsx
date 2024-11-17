import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Card({ id, title, img, amount, discount }) {
  const dispatch = useDispatch();

  const addInCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price: parseFloat(discount.replace("₹", "").replace(",", "")) || 0,
        img,
        quantity: 1,
      })
    );
  };

  return (
    <div className="border-2 flex justify-center items-center bg-white p-2 rounded-lg shadow-md">
      <div className="flex flex-col items-center mt-2">
        <img src={img} alt={title} className="h-56 object-contain" />
        <h4 className="cart-title font-semibold text-center text-sm mt-2">
          {title.length > 100 ? title.substring(0, 90) + "..." : title}
        </h4>
        <div className="flex justify-between items-center w-full mt-2">
        <span>MRP: <span className="text-lg 500 font-bold">{discount}</span></span>
          <span className="line-through text-gray-500font-bold text-lg">{amount}</span>
        </div>
        <button
          className="bg-yellow-400 w-full mt-4 add_to_cart rounded-xl p-2 text-sm font-medium hover:bg-yellow-500"
          onClick={addInCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
