import React, { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import items from "./components/item.json";
import Card from "./components/Card";

export default function App() {
  const [vis, setVis] = useState(false);

  const [products, setProducts]=useState(items);
  return (
    <div className="font-['Amazon_Ember'] m-0 p-0 box-border overflow-x-hidden bg-zinc-200">
      <Header products={products} setProducts={setProducts} />
     

      {vis ? <SideBar /> : null}
      <div className="grid grid-cols-4 gap-4 overflow-auto p-4">
        {products.map((item) => (
          <Card
            key={item.product_id}
            id={item.product_id}
            title={item.product_name}
            img={item.img_link}
            amount={item.actual_price}
            discount={item.discounted_price}
          />
        ))}
      </div>
    </div>
  );
}