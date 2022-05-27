import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ 
    type = 'text', 
    placeholder = '', 
    name = '', 
    value, 
    onKeyDown 
}) => (
    <input 
        className="Input"
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        onKeyDown={onKeyDown}
    />
);

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func
};

export default Input;
