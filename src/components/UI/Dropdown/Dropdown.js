import React from 'react';
import PropTypes from 'prop-types';

import DropdownOption from './DropdownOption/DropdownOption';
import './Dropdown.scss';

const 
Dropdown = ({ 
    heading, 
    options,
    toggleDropdown, 
    toggleOptionIcon 
}) => {
    return (
        <div className="Dropdown">
            <div className='DropdownHeader' onClick={toggleDropdown}>
                <strong>{heading}</strong>
                <i className='fas fa-chevron-down' />
            </div>

            <ul className='DropdownBody'>
                {
                    options.map((option, i) => {
                        return <DropdownOption 
                                    key={i}
                                    optionTitle={option}
                                    toggleOptionIcon={toggleOptionIcon}
                                />
                    })
                }
            </ul>
        </div>
    );
};

Dropdown.propTypes = {
    heading: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    toggleOptionIcon: PropTypes.func.isRequired
};

export default Dropdown;
