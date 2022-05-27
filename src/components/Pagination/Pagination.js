import React from 'react';
import PropTypes from 'prop-types';

import PaginationButton from './PaginationButton/PaginationButton';
import './Pagination.scss';

const PER_PAGE = 9;

const Pagination = ({ productsAmount, changePage }) => {
    const btnsAmount = productsAmount / PER_PAGE;
    const paginationButtons = [];
    for (let i = 0; i < btnsAmount; i++) {
        paginationButtons.push(i);
    }
    
    return (
        <div className="Pagination">
            {paginationButtons.map((paginationButton, i) => {
                paginationButton = i + 1;
                return <PaginationButton 
                            key={i} 
                            changePage={changePage}
                            page={i + 1}
                            className={!i
                                ? 'PaginationButton Active' 
                                : 'PaginationButton'
                            }
                        >
                            {paginationButton}
                        </PaginationButton>;
            })}
        </div>
    );
};

Pagination.propTypes = {
    changePage: PropTypes.func.isRequired,
    productsAmount: PropTypes.number.isRequired
};

export default Pagination;
