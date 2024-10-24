import React from "react";

const Button = ({ value, onClick, className }) => {
  return (
    <button
      className={`text-lg p-3 sm:p-4 md:p-5 rounded-lg hover:bg-opacity-80 ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
