import React from 'react';

import productsData from '../assets/database/products.json';
import Dropdown from '../UI/Dropdown/Dropdown';
import { sort } from '../../shared/utility';
import './Filters.scss';

const Filters = ({ toggleDropdown, toggleOptionIcon, activeCategory }) => {
    activeCategory = activeCategory ? activeCategory : 'tv';
    // console.log('[activeCategory]', activeCategory);
    const categoryProducts = productsData.filter(({ category }) => {
        return category.toLowerCase() === activeCategory;
    });
    // console.log('[categoryProducts]', categoryProducts);
    const filterNames = ['manufacturer', 'warranty', 'country', 'rating'];

    const filtersData = categoryProducts.reduce((result, product) => {
        for (const key in product) {
            if(!filterNames.includes(key)) continue;
            // console.log('[product[key]]', product[key]);
            const filterValue = product[key];
            
            if (Array.isArray(result[key]) && 
                result[key].includes(filterValue)) continue;
            
            if (Array.isArray(result[key])) {
                result[key].push(filterValue);
            } else {
                result[key] = [filterValue];
            }
        }

        return result;
    }, {});

    // console.log('[filtersData]', filtersData);
    const dropdownFilters = Object.entries(filtersData);
    dropdownFilters.forEach(key => {
        key = filtersData[key];
    });

    return (
        
        <div className="Filters">
            {
                dropdownFilters.map((filterKey, i) => {
                    
                    return <Dropdown 
                                key={i}
                                toggleDropdown={toggleDropdown}
                                toggleOptionIcon={toggleOptionIcon}
                                heading={filterKey[0]} 
                                options={sort(filterKey[1])}
                            />
                })
                
            }
        </div>
    );
};

export default Filters;
