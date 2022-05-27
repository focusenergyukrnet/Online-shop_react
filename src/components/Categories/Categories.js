import React from 'react';
import PropTypes from 'prop-types';

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
    return (
        <div className="Categories">
            {
                categoryNames.map((name, i) => {
                    let title;
                    title = name;

                    return <Button 
                                key={i}
                                className={!i ? 'Button Active' : 'Button'}
                                category={name.toLowerCase()}
                                onClick={onClick}
                            >
                                {title}
                            </Button>
                })
            }
        </div>
    );
};

Categories.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Categories;
