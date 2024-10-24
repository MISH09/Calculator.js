import React from "react";

const Display = ({ input, result }) => {
  return (
    <div className="bg-blue-200 text-blue-900 p-4 sm:p-5 md:p-6 rounded-lg mb-5 shadow-inner text-lg sm:text-2xl md:text-3xl lg:text-4xl">
      <div>{input || "0"}</div>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-500">{result ? `= ${result}` : ""}</div>
    </div>
  );
};

export default Display;
