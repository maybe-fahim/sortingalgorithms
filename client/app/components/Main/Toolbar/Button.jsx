import React from "react";
import "./Button.css";

const Button = ({ children, onClick, disabled, className, style }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
