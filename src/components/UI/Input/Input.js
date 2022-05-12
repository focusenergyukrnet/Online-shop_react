import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ 
    type = 'text', 
    placeholder = '', 
    name = '', 
    value, 
    onChange,  
}) => (
    <input 
        className="Input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
    />
);

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
