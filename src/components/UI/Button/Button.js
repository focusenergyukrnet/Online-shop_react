import React from 'react';

import './Button.scss';

const Button = ({ type = 'text', children, onClick, className, styling }) => {
    return (
        
        <button 
            // className={styling ? 'Button Alternative' : "Button"}
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}    
        </button>
    );
    
};

export default Button;