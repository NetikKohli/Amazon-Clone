import React, { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import imge from '../public/assets/list.svg';
import items from './components/item.json';
import Card from './components/Card';
import { Link } from 'react-router-dom';

export default function App() {
  const [vis, setVis] = useState(false);
 
 

  return (
    <div className="font-['Amazon_Ember'] m-0 p-0 box-border overflow-x-hidden bg-zinc-200">
      <Header />
     

      {vis ? <SideBar /> : null}

      <div className='grid grid-cols-4 gap-4 overflow-auto p-4'>
        {items.map((item) => (
          <Card
            key={item.product_id}
            title={item['product_name']}
            img={item['img_link']}
            amount={item['actual_price']}
            discount={item['discounted_price']}
          />
        ))}
      </div>
      <div className="text-center my-4">
        <Link to="/cart" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
          Go to Cart
        </Link>
      </div>
    </div>
  );
}
