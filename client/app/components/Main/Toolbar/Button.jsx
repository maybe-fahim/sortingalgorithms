// src/components/Button.jsx
import React from 'react';
import './Button.css'; // Ensure to create this file for button styles

const Button = ({ onClick, children, className }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
