import React from 'react';
import PropTypes from 'prop-types';

import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';
import './Main.scss';

const Main = ({ onClick }) => {
    return (
        <div className="Main">
            <Categories onClick={onClick}/>

            <Products />
        </div>
    );
    
};

Main.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Main;
