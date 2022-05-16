import React from 'react';

import './Button.scss';

const Button = ({ type = 'text', children, onClick, className, category }) => {
    return (
        <button 
            className={className}
            data-category={category}
            type={type}
            onClick={onClick}
        >
            {children}    
        </button>
    );
    
};

export default Button;