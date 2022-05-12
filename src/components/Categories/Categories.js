import React from 'react';

import productsData from '../assets/database/products.json';
import Button from '../UI/Button/Button';
import './Categories.scss';

const Categories = ({ onClick }) => {
    const categoryNames = productsData.reduce((result, productData) => {
        const { category } = productData;

        if (!result.includes(category)) {
            result.push(category);
        }

        return result;
    }, []);
    // console.log('[categoryNames]', categoryNames);
    return (
        <div className="Categories">
            {
                categoryNames.map((name, i) => {
                    let title;
                    title = name;

                    return <Button 
                                key={i}
                                className={!i ? 'Button Active' : 'Button'}
                                onClick={onClick}
                            >
                                {title}
                            </Button>
                })
            }
        </div>
    );

    
};

export default Categories;
