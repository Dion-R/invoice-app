import React from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import plus from "../assets/icon-plus.svg";

const InvoiceController = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="text-2xl">Invoices</h3>
        <span className="text-gray-500 text-sm">7 invoices</span>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex justify-center items-center gap-3">
          <span className="mt-1">Filter </span>
          <button>
            <img src={arrowDown} alt="arrowDown" />
          </button>
        </div>
        <button className="h-10 w-24 bg-purple-500 rounded-3xl p-1 flex gap-2 items-center">
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <span className="text-white mt-1">New</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceController;
