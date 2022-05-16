import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../../components/Pagination/Pagination';
import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';
import './Main.scss';

const Main = ({ changePage, onClick, showProducts, activePage }) => {
    return (
        <div className="Main">
            <Categories onClick={onClick}/>

            {
            showProducts &&
                <Products changePage={changePage} activePage={activePage} />
            }
        </div>
    );
    
};

Main.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Main;
