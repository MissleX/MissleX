import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}