import React from 'react';
import PropTypes from 'prop-types';

import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';
import './Main.scss';

const Main = ({ 
    search, 
    changePage, 
    onClick, 
    onLoad, 
    activeCategory, 
    activePage
}) => {
    return (
        <div className="Main">
            <Categories onClick={onClick}/>

            {
                <Products 
                    search={search}
                    changePage={changePage} 
                    onLoad={onLoad}
                    activeCategory={activeCategory}
                    activePage={activePage} 
                />
            }
        </div>
    );
    
};

Main.propTypes = {
    onClick: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired
};

export default Main;
