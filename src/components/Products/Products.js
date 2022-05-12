import React from 'react';

import productsData from '../assets/database/products.json';
import Product from './Product/Product';
import './Products.scss';

const Products = () => {
    return (
        <div className="Products">
            {productsData.map((productData, i) => {
                
                // console.log('[productData]', productData);
                return <Product key={i} {...productData} />
            })}
        </div>
    );
};

export default Products;
