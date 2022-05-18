import React from 'react';

import DropdownOption from './DropdownOption/DropdownOption';
import './Dropdown.scss';

const 
Dropdown = ({ 
    heading, 
    options,
    toggleDropdown, 
    toggleOptionIcon 
}) => {
    // console.log('[options]', options)
    return (
        <div className="Dropdown" onClick={toggleDropdown}>
            <div className='DropdownHeader'>
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

export default Dropdown;
