import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import icon from "/icon.png";
import locationIcon from "/location-icon.svg";
import cartIcon from "/cart.svg";

export default function Header() {
  const topics = [
    "Fresh Products", "Sell", "Best Seller", "Today's Deals", "Mobiles",
    "Electronics", "Home and Kitchen", "Amazon Pay", "New Release",
  ];

  return (
    <nav>
      {/* Top Navigation */}
      <div className="flex w-full h-[9vmin] items-center justify-around bg-[#131921] text-white">
        {/* Amazon Logo */}
        <div className="flex items-center ml-4 mr-4 hover:border hover:border-white hover:rounded">
          <img className="w-4/5 max-w-[7rem] h-4/5" src={icon} alt="Amazon" />
          <span className="-mt-[7%]">.in</span>
        </div>

        {/* Location */}
        <div className="flex items-center w-[10%] hover:border hover:border-white hover:rounded">
          <img className="w-4 mr-2" src={locationIcon} alt="Location" />
          <div>
            <div className="text-sm">Deliver to</div>
            <div className="font-bold">Update Location</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1">
          <Search />
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          {/* Sign-In */}
          <NavLink className="text-white no-underline hover:underline" to="/signin">
            <div>
              <div className="text-sm">Hello, Sign in</div>
              <div className="font-bold">Accounts & Lists</div>
            </div>
          </NavLink>

          {/* Returns & Orders */}
          <div>
            <div className="text-sm">Returns</div>
            <div className="font-bold">& Orders</div>
          </div>

          {/* Cart */}
          <NavLink to="/cart" className="flex items-center gap-2 text-white no-underline hover:underline">
            <img className="w-10 h-10" src={cartIcon} alt="Cart" />
            <div className="font-bold">Cart</div>
          </NavLink>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#232f3e] flex justify-around items-center h-10 text-white">
        {topics.map((item, index) => (
          <div key={index} className="hover:underline cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}
