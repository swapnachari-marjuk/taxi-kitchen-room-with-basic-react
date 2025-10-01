import React, { use, useState } from "react";
import States from "../States/States";
import OrderCards from "../Cards/OrderCards";
import CookingCards from "../Cards/CookingCards";
import CookedCards from "../Cards/CookedCards";
import { toast } from "react-toastify";

const MainContainer = ({ orderPromise }) => {
  const data = use(orderPromise);
  const [orders, setOrders] = useState(data);
  const [cookingItems, setCookingItems] = useState([]);
  const [cookedItems, setCookedItems] = useState([]);

  const handleCooking = (order) => {
    const filteredItems = cookingItems.find((items) => items.id === order.id);
    if (filteredItems) {
      toast.warn("Item order is already taken!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  const handleCooked = (order) => {
    const newCooked = [...cookedItems, order];
    setCookedItems(newCooked);
    const filteredCooking = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(filteredCooking);
    toast.success("order is ready to served", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    //   transition: Slide,
    });
    const remainingOrders = orders.filter((item) => item.id !== order.id);
    setOrders(remainingOrders);
  };

  return (
    <div>
      <States
        orders={orders}
        cookingItems={cookingItems}
        cookedItems={cookedItems}
      ></States>
      <section className="grid lg:grid-cols-12 gap-5 max-w-11/12 mx-auto py-5">
        <section className="order_section lg:col-span-7">
          <h3 className="text-2xl font-bold mb-3">Current Orders </h3>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCards
                key={order.id}
                handleCooking={handleCooking}
                order={order}
              ></OrderCards>
            ))}
          </div>
        </section>
        <section className="lg:col-span-5 space-y-5">
          <h3 className="text-2xl font-bold mb-3">Cooking Now</h3>
          <div className="space-y-5">
            {cookingItems.map((order) => (
              <CookingCards
                key={order.id}
                order={order}
                handleCooked={handleCooked}
              ></CookingCards>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-3">Ready To Serve</h3>
          <div className="space-y-5">
            {cookedItems.map((item) => (
              <CookedCards key={item.id} item={item}></CookedCards>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainContainer;
