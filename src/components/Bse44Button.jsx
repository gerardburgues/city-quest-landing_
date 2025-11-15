import React from "react";

const Base44Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Base44Button;