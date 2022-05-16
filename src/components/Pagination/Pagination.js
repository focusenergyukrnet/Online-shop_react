import React from 'react';

import PaginationButton from './PaginationButton/PaginationButton';
import './Pagination.scss';

const PER_PAGE = 9;

const Pagination = ({ productsAmount, changePage }) => {
    const btnsAmount = productsAmount / PER_PAGE;
    // console.log('[btnsAmount]', btnsAmount);
    const paginationButtons = [];
    for (let i = 0; i < btnsAmount; i++) {
        paginationButtons.push(i);
        // console.log('[paginationButton]', paginationButton);
    }
    
    return (
        <div className="Pagination">
            {paginationButtons.map((paginationButton, i) => {
                paginationButton = i + 1;
                // console.log('[paginationButton]', paginationButton);
                return <PaginationButton 
                            key={i} 
                            changePage={changePage}
                            page={i + 1}
                            className={!i 
                                ? 'PaginationButton Active' 
                                : 'PaginationButton'}>
                            {paginationButton}
                        </PaginationButton>;
            })}
        </div>
    );
};

export default Pagination;
