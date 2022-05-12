import React from 'react';

import './Footer.scss';

const year = new Date().getFullYear();
const Footer = () => (
    <div className="Footer">
        <strong>All Rights Reserved, {year}</strong>
    </div>
);

export default Footer;
