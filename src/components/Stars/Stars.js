import React from 'react';
import PropTypes from 'prop-types';

import './Stars.scss';

const Stars = ({amount}) => {
    let result = [];
    let stars;
    for(let i = 0; i < amount; i++) {
        result.push(i);
        stars = result.map((star, i) => {
            
            return star = <i key={i} className='fas fa-star'></i>
        });
    }

    return stars;
};

Stars.propTypes = {
    amount: PropTypes.number.isRequired
};

export default Stars;
