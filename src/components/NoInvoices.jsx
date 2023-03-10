import React from "react";
import noInvoice from "../assets/illustration-empty.svg";
const NoInvoices = () => {
  return (
    <div>
      <img src={noInvoice} alt="no invoice" className="mt-20 mx-auto" />
      <h3 className="text-2xl font-bold text-center mt-4">There is nothing here</h3>
      <p className="text-gray-400 text-center mt-4 text-sm px-16">
        Create am invoice by clicking the <span className="font-bold">New</span>{" "}
        button and get started
      </p>
    </div>
  );
};

export default NoInvoices;
