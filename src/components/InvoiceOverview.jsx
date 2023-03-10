import React from "react";
import back from "../assets/icon-arrow-left.svg";
import Status from "./Status";

const InvoiceOverview = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <img src={back} alt="" />
        <span className="font-bold mt-1">Go back</span>
      </div>
      <Status />
    </div>
  );
};

export default InvoiceOverview;
