import React from 'react';

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

export default PaginationButton;
