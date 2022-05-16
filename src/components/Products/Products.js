import React from 'react';

// import Categories from '../Categories/Categories';
import Pagination from '../Pagination/Pagination';
import productsData from '../assets/database/products.json';
import Product from './Product/Product';
import './Products.scss';

const Products = ({ changePage, activePage }) => {
    const categoryButton = document.querySelector('.Button.Active');
    // console.log('[categoryButton]', categoryButton);
    const activeCategory = categoryButton ? categoryButton.dataset.category : 'tv';
    console.log('[activeCategory]', activeCategory);
    const paginationButton = document.querySelector('.PaginationButton.Active');
    // console.log('[paginationButton]', paginationButton);

    activePage = activePage ? activePage : 1;
    console.log('[activePage]', activePage);

    const filteredProducts = productsData.filter(({ category }) => {
        // if (!activePage) return category.toLowerCase() === activeCategory;
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
                
                return <Product key={i} 
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
