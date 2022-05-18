import React from 'react';

import Filters from '../../components/Filters/Filters';
// import Dropdown from '../../components/UI/Dropdown/Dropdown';
import './Sidebar.scss';

const Sidebar = ({ toggleDropdown, toggleOptionIcon, activeCategory }) => (
    <div className="Sidebar">
        <Filters 
            toggleDropdown={toggleDropdown}
            toggleOptionIcon={toggleOptionIcon}
            activeCategory={activeCategory}
        />
        {/* <Dropdown toggleOptionIcon={toggleOptionIcon}/>
        <Dropdown toggleOptionIcon={toggleOptionIcon}/>
        <Dropdown toggleOptionIcon={toggleOptionIcon}/> */}
    </div>
);

export default Sidebar;
