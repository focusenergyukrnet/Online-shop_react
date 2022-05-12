import React from 'react';

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

export default Logo;
