import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../Pagination/Pagination';
import productsData from '../assets/database/products.json';
import Product from './Product/Product';
import './Products.scss';

const Products = ({ 
    search, 
    changePage, 
    onLoad, 
    activeCategory, 
    activePage, 
}) => {
    activeCategory = activeCategory ? activeCategory : 'tv';
    activePage = activePage ? activePage : 1;
    
    const filteredProducts = productsData.filter(({ category }) => {
        return category.toLowerCase() === activeCategory;
    });

    const min = activePage * 9 - 9;
    const max = activePage * 9;
    const filteredProductsByPage = filteredProducts.filter((_, i) => {
        return i >= min && i < max;
    });

    const productsAmount = filteredProducts.length;
    
    const regExp = new RegExp(search, 'i');
    let searchedProducts;
    if (search) {
        searchedProducts = productsData.filter(product => {
            for (const key in product) {
                if (/id|imageSrc|price|rating/.test(key)) continue;
                if (regExp.test(product[key])) return true;
            }
    
            return false;
        });
    }

    return ( 
        <div className="Products">
            {
                searchedProducts ?
                    searchedProducts.map((productData, i) => {
                        return <Product key={i} 
                                    onLoad={onLoad}
                                    {...productData} 
                                />
                    })
                : filteredProductsByPage.map((productData, i) => {
                    return <Product key={i} 
                                onLoad={onLoad}
                                {...productData} 
                            />
                })
            }
            {productsAmount >= 9 &&
                <Pagination 
                    productsAmount={productsAmount}
                    changePage={changePage}
                />
            }
        </div>
    );
};

Products.propTypes = {
    onLoad: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    productsAmount: PropTypes.number,
    searchedProducts: PropTypes.object
};

export default Products;
