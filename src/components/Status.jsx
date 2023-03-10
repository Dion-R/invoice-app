import React from "react";

const Status = () => {
  return (
    <div className="p-3 flex justify-between items-center bg-white rounded-xl">
      <span>Status</span>
      <div className="w-18 h-10">
        <div className="w-28 h-10 bg-green-50 flex items-center justify-center gap-2 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="mt-1 text-green-400">Paid</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
