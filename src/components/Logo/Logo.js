import React from 'react';
import PropTypes from 'prop-types';

import logoSrc from '../assets/images/logo.png';
import './Logo.scss';

const Logo = ({title}) => (
    <div className="Logo">
        <div className='LogoWrapper'>
            <img src={logoSrc} alt={title} />
        </div>

        <h1>{title}</h1>
    </div>
);

Logo.propTypes = {
    title: PropTypes.string.isRequired
};

export default Logo;
