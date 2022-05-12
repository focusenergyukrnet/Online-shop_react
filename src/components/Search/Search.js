import React from 'react';
import PropTypes from 'prop-types';

import Input from '../UI/Input/Input';
import './Search.scss';

const Search = ({ onChange, search }) => (
    <div className="Search">
        <Input 
            placeholder='Search'
            name='search'
            value={search}
            onChange={onChange}
        />

        <i className="fas fa-search"></i>   
    </div>
);

Search.propTypes = {
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Search;
