import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../../components/Auth/Auth';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import './Header.scss';

const Header = ({ onKeyDown, search, onClick, showModal, onSubmit }) => (
    <div className="Header">
        <div className='HeaderWrapper'>
            <Logo title="Elon's Online shop" />
            <Search 
                search={search}
                onKeyDown={onKeyDown}
            />
            <Auth 
                onClick={onClick}
                showModal={showModal} 
                onSubmit={onSubmit}
            />
        </div>
    </div>
);

Header.propTypes = {
    onClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func
};

export default Header;
