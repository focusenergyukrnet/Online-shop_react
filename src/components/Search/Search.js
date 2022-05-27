import React from 'react';
import PropTypes from 'prop-types';

import Input from '../UI/Input/Input';
import './Search.scss';

const Search = ({ onKeyDown, search }) => {
    return (
        <div className="Search">
            <Input 
                placeholder='Search'
                name='search'
                value={search}
                onKeyDown={onKeyDown}
            />
    
            <i className="fas fa-search"></i>   
        </div>
    )
};

Search.propTypes = {
    onKeyDown: PropTypes.func
};

export default Search;
