import React from 'react';
import PropTypes from 'prop-types';

import './PaginationButton.scss';

const PaginationButton = ({children, className, changePage, page}) => (
    <div 
        className={className}
        onClick={changePage}
        data-page={page}
    >
        {children}
    </div>
);

PaginationButton.propTypes = {
    changePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired
};

export default PaginationButton;
