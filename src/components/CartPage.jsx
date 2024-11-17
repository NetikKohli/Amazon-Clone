import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { updateQuantity, removeFromCart } from "../store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id)); // Ensure the ID matches the product_id in the cart
  };
  
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div>
            <div className="divide-y divide-gray-300">
              {cartItems.map((item) => (
                <CartItem
                  key={item.product_id}
                  item={item}
                  updateQuantity={handleUpdateQuantity}
                  removeItem={handleRemoveItem}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-medium">
                Subtotal ({cartItems.length} items):{" "}
                <span className="font-bold">₹{subtotal.toFixed(2)}</span>
              </span>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
