import React from "react";

const invoiceCard = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded-xl">
      <div className="flex justify-between items-center">
        <span className="font-bold">
          <span className="text-gray-400">#</span>RT3080
        </span>
        <span className="text-gray-400 text-sm">Jensen Huang</span>
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div>
          <p className="text-gray-400 text-sm">Due 19 Aug 2021</p>
          <p className="font-extrabold mt-2">$ 556.00</p>
        </div>
        <div className="w-28 h-10 bg-green-50 flex items-center justify-center gap-2 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="mt-1 text-green-400">Paid</span>
        </div>
      </div>
    </div>
  );
};

export default invoiceCard;
