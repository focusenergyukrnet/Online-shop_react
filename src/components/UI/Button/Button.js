import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string.isRequired,
    category: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;