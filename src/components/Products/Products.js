import React from 'react';

// import Categories from '../Categories/Categories';
import Pagination from '../Pagination/Pagination';
import productsData from '../assets/database/products.json';
import Product from './Product/Product';
import './Products.scss';

const Products = ({ changePage, onLoad, activeCategory, activePage }) => {
    activeCategory = activeCategory ? activeCategory : 'tv';
    // console.log('[activeCategory]', activeCategory);

    activePage = activePage ? activePage : 1;
    // console.log('[activePage]', activePage);

    const filteredProducts = productsData.filter(({ category }) => {
        return category.toLowerCase() === activeCategory;
    });

    const min = activePage * 9 - 9;
    const max = activePage * 9;

    const filteredProductsByPage = filteredProducts.filter((_, i) => {
        return i >= min && i < max;
    });

    // console.log('[filteredProductsByPage]', filteredProductsByPage);

    const productsAmount = filteredProducts.length;

    return ( 
        <div className="Products">
            {
            filteredProductsByPage.map((productData, i) => {
                // console.log('[productData]', productData);
                return <Product key={i} 
                            onLoad={onLoad}
                            {...productData} 
                        />
            })}
            {productsAmount >= 9 &&
                <Pagination 
                    productsAmount={productsAmount}
                    changePage={changePage}
                />
            }
        </div>
    );
};

export default Products;
