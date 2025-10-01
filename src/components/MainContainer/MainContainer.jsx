import React, { use, useState } from "react";
import States from "../States/States";
import OrderCards from "../Cards/OrderCards";
import CookingCards from "../Cards/CookingCards";

const MainContainer = ({ orderPromise }) => {
  const orders = use(orderPromise);
  const [cookingItems, setCookingItems] = useState([]);
  const handleCooking = (order) => {
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems)
  };
  
  return (
    <div>
      <States orders={orders.length} cookingItems={cookingItems.length}></States>
      <section className="grid lg:grid-cols-12 gap-5 max-w-11/12 mx-auto py-5">
        <section className="order_section lg:col-span-7">
          <h3 className="text-2xl font-bold mb-3">Current Orders</h3>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCards key={order.id} handleCooking={handleCooking} order={order}></OrderCards>
            ))}
          </div>
        </section>
        <section className="lg:col-span-5">
          <h3 className="text-2xl font-bold mb-3">Cooking Now</h3>
          <div className="space-y-5">
            {
                cookingItems.map(order=> <CookingCards key={order.id} order={order}></CookingCards>)
            }
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainContainer;
