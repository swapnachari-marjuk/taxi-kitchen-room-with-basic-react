import React from "react";

const CookedCards = ({ item }) => {
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div>
      <div className="border rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition">
        {/* Order Title */}
        <h3 className="text-xl font-bold text-green-700 mb-2">
          {item.order_title}
        </h3>

        {/* Table No */}
        <p className="text-gray-800">
          <span className="font-semibold">Table:</span> {item.table_no}
        </p>

        {/* Waiter ID */}
        <p className="text-gray-800">
          <span className="font-semibold">Waiter ID:</span> {item.waiterId}
        </p>

        {/* Cooking Time */}
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Cooking Time:</span> {currentTime}
        </p>
      </div>
    </div>
  );
};

export default CookedCards;
