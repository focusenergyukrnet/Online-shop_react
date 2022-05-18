import React from 'react';

import './DropdownOption.scss';

const DropdownOption = ({optionTitle, toggleOptionIcon}) => {
    // console.log('[country]', country);
    return (
        <li className="DropdownOption" onClick={toggleOptionIcon}>
            <i className='far fa-square' />
            <strong>{optionTitle}</strong>
        </li>
    );
};

export default DropdownOption;
