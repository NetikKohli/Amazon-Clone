import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex items-center py-4">
    <img
      src={item.img}
      alt={item.title}
      className="w-20 h-20 object-cover rounded mr-4"
    />
    <div className="flex-1">
      <h2 className="text-lg font-medium">{item.title}</h2>
      <p className="text-sm text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
      <div className="mt-2 flex items-center space-x-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            updateQuantity(item.id, parseInt(e.target.value, 10))
          }
          className="w-16 p-1 border border-gray-300 rounded"
        />
        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

export default CartItem;
