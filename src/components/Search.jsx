import React from 'react'

export default function Search() {
  return (
    <div className="[@media(width<1200px)]:w-[90%] flex h-4/5 flex-[1] w-[550px] m-[20px] justify-center content-center">
        <select className='bg-[#d8c9c9] text-zinc-800 w-16 pl-[4px] rounded-tl-[7px] rounded-bl-[7px] border-[none] border-r-[1px_solid_gray]' name="All" id="All">
          <option value="All">All</option>
          <option value="All">Amazon MiniTV</option>
          <option value="All">Sell</option>
          <option value="All">Best Sellers</option>
          <option value="All">Today's Deals</option>
          <option value="All">Mobiles</option>
          <option value="All">Customer Service</option>
          <option value="All">Electronics</option>
          <option value="All">Prime</option>
          <option value="All">New Releases</option>
          <option value="All">Alexa Skills</option>
          <option value="All">Amazon Devices</option>
          <option value="All">Baby </option>
        </select>
        <input className='border-[none] w-full text-[medium] pl-[25px] min-w-[4rem] text-black' type="text" placeholder="Search Amazon.in" />
        <button className="bg-[#eeb162] border-[none] hover:bg-[#df8d21] w-[5.5rem] rounded-tr-[7px] rounded-br-[7px] outline-[none] flex justify-center item-center" alt=""><img className='w-8' src='public/assets/search.svg'></img></button>
      </div>
      
  )
}
