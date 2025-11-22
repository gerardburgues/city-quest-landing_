import React from "react";

const Button = ({ children, onClick, className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`font-semibold rounded-lg transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

