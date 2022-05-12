import React from 'react';

import './Stars.scss';

// <i class="fas fa-star"></i>
// <i class="far fa-star"></i>

const Stars = ({amount}) => {
    // console.log('[amount]', amount);
    let result = [];
    let stars;
    for(let i = 0; i < amount; i++) {
        result.push(i);
        // console.log('[result]', result);
        stars = result.map((star, i) => {
            
            return star = <i key={i} className='fas fa-star'></i>
        });

        // console.log('[stars]', stars);
    }
    return stars;
};

export default Stars;
