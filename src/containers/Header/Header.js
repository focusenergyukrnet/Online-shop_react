import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../../components/Auth/Auth';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import './Header.scss';

const Header = ({ onChange, search, onClick, showModal, onSubmit }) => (
    <div className="Header">
        <div className='HeaderWrapper'>
            <Logo title="Elon's Online shop" />
            <Search 
                search={search}
                onChange={onChange}
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
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Header;
