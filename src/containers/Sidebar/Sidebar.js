import React from 'react';
import PropTypes from 'prop-types';

import Filters from '../../components/Filters/Filters';
import './Sidebar.scss';

const Sidebar = ({ toggleDropdown, toggleOptionIcon, activeCategory }) => (
    <div className="Sidebar">
        <Filters 
            toggleDropdown={toggleDropdown}
            toggleOptionIcon={toggleOptionIcon}
            activeCategory={activeCategory}
        />
    </div>
);

Sidebar.propTypes = {
    toggleDropdown: PropTypes.func.isRequired,
    toggleOptionIcon: PropTypes.func.isRequired
};

export default Sidebar;
