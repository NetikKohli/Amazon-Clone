import React from 'react'

export default function ({visiblility}) {
  return (
    <div>
        <div className={`bg-[#f0f0f7] w-1/2 h-full -translate-x-[39px] [transition:all_7s_ease] absolute [box-shadow:2px_2px_30px_black]`}>
        <div className="hdn-head">
            <h2>Hello, Sign in</h2>
        </div>
        <div className={"hdn-content"}>
            <h3>Digital Content & Devices</h3>
            <ul>
                <div>
                    <li>Amazon Music</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Kindle E-Readers & Books</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Appstore for Android</li><i className="fa-solid fa-angle-right"></i>
                </div>
            </ul>
            <div className="line"></div>
        </div>
        <div className="hdn-content">
            <h3>Shop By Department</h3>
            <ul>
                <div>
                    <li>Electronics</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Computers</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Smart Homes</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Arts & Crafts</li><i className="fa-solid fa-angle-right"></i>
                </div>
            </ul>
            <div className="line"></div>
        </div>
        <div className="hdn-content">
            <h3>Programs & Features</h3>
            <ul>
                <div>
                    <li>Gift Cards & Mobile Recharges</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Flight Tickets</li><i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <li>Clearance Store</li><i className="fa-solid fa-angle-right"></i>
                </div>
            </ul>
            <div className="line"></div>
        </div>
    </div>
    
    </div>

  )
}
