import { CookingPot, PackageCheck, ScrollText } from "lucide-react";
import React from "react";

const States = ({orders,cookingItems}) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-4 max-w-11/12 mx-auto">
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orders}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{cookingItems}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <PackageCheck className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready to Serve
            <h2 className="text-6xl font-bold">0</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
