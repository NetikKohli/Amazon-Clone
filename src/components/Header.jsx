import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import icon from "/icon.png"
import locationIcon from "/location-icon.svg"
import cartIcon from "/cart.svg"
export default function Header() {
  const topics = [
    'Fresh Products', 'Sell', 'Best Seller', 'Today Deals', 'Mobiles',
    'Electronics', 'Home and Kitchen', 'Amazon Pay', 'New Release',
  ];
  return (
    <nav className="">
      <div className="flex w-[100vmax] h-[9vmin] overflow-hidden justify-around text-[white] bg-[#131921] items-center">
      <div className="flex w-[8%] h-4/5 ml-4 mr-4 justify-center items-center no-underline hover:border-[1px] hover:border-[solid] hover:border-[white] hover:rounded-[3px]">
        <img className="w-4/5 max-w-[7rem] h-4/5" src={icon} />
        <span className="-mt-[7%]">.in</span>
      </div>


      <div className="[@media(width<1200px)]:w-[80px] [@media(width<1200px)]:ml-4 [@media(width<1200px)]:mr-4 hover:border-[1px] hover:border-[solid] hover:border-[white] hover:rounded-[3px] flex flex-row justify-around items-center w-[9.5em] h-[90%]">
        <img className="w-4 mr-[5px] mt-[15px]" src={locationIcon} alt="" />
        <div className="update-location">
          <div className="up">Delivering to </div>
          <div className="text-[1em] font-[bolder]">Update Location</div>
        </div>
      </div>
      <div className="mid-nav">
        <Search />
      </div>
      <div className="[@media(width<1200px)]:hidden flex w-auto gap-[60px] justify-between">
        <NavLink className="text-[white] no-underline" to="/signin">
          <div className="hover:cursor-pointer">
            <div className="text-[1em]">Hello,sign in</div>
            <div className="text-[1em] font-[bolder]">Accounts & Lists</div>
          </div>
        </NavLink>
        <div>
          <div className="text-[1em]">Returns</div>
          <div className="text-[1em] font-[bolder]">& Orders</div>
        </div>
        <NavLink className="navlink" to="/cart">
          <div className="flex gap-[5px] w-[30px] mr-20">
            <img className = 'w-[40px] h-[40px]' src={cartIcon} alt="Cart" />
            <div className="mt-[13px] text-[1em] font-[bolder]">Cart</div>
          </div>
        </NavLink>
      </div>
      </div>
      <div className='bg-[#232f3e] h-10 items-center flex text-white flex-row justify-around'>
        {topics.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>  
    </nav>

  );
}
