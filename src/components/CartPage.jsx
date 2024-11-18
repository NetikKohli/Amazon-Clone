import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { updateQuantity, removeFromCart, addToCart } from "../store/cartSlice";
import items from "../components/item.json"; // The entire product catalog
import Card from "./Card"; // Reusing the card component for suggestions

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Compute subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter out items already in the cart to display as suggestions
  const cartItemIds = cartItems.map((item) => item.id);
  const suggestions = items.filter((item) => !cartItemIds.includes(item.product_id));

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md p-6 rounded-lg">
        {/* Cart Section */}
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="divide-y divide-gray-300">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={(id, qty) =>
                    dispatch(updateQuantity({ id, quantity: qty }))
                  }
                  removeItem={(id) => dispatch(removeFromCart(id))}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">
                Subtotal ({cartItems.length} items):{" "}
                <span className="font-bold text-gray-800">
                  ₹{subtotal.toFixed(2)}
                </span>
              </span>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        )}
      </div>

      {/* Suggestions Section */}
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          You might also like:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestions.map((item) => (
            <div key={item.product_id} className="bg-white p-4 shadow rounded-lg">
              <img
                src={item.img_link}
                alt={item.product_name}
                className="h-40 object-contain w-full mb-2"
              />
              <h3 className="text-sm font-medium text-gray-800 mb-1">
                {item.product_name.length > 50
                  ? item.product_name.substring(0, 50) + "..."
                  : item.product_name}
              </h3>
              <p className="text-gray-500 text-sm">Price: {item.discounted_price}</p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.product_id,
                      title: item.product_name,
                      price: parseFloat(
                        item.discounted_price.replace("₹", "").replace(",", "")
                      ),
                      img: item.img_link,
                      quantity: 1,
                    })
                  )
                }
                className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
