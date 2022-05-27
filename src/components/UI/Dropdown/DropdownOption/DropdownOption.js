import React from 'react';
import PropTypes from 'prop-types';

import './DropdownOption.scss';

const DropdownOption = ({optionTitle, toggleOptionIcon}) => {
    return (
        <li className="DropdownOption" onClick={toggleOptionIcon}>
            <i className='far fa-square' />
            <strong>{optionTitle}</strong>
        </li>
    );
};

DropdownOption.propTypes = {
    optionTitle: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    toggleOptionIcon: PropTypes.func.isRequired
};

export default DropdownOption;
