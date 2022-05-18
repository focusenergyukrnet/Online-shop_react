import React from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import Stars from '../../Stars/Stars';
import Button from '../../UI/Button/Button';
import './Product.scss';

const Product = ({
    id,
    category,
    imageSrc,
    manufacturer,
    model,
    country,
    price,
    warranty,
    description,
    rating,
    onLoad
}) => {
    return (
        
        <div className="Product" >
            <div className="TopLine">
                <h4 className="ProductCategory">{category}</h4>
                <Stars amount={rating}/>
            </div>

            <div className="ImageWrapper">
                <img hidden src={imageSrc} alt={model} onLoad={onLoad}/>
                <Spinner />
            </div>

            <h2 className="ProductManufacturer">{manufacturer}</h2>
            <h1 className="ProductModel">{model}</h1>
            <h5 className="ProductCountry">{country}</h5>
            <h3 className="ProductPrice">${price}</h3>
            <strong className="ProductWarranty">warranty: {warranty}</strong>
            <p className="ProductDescription">{ description.slice(0, 101) + '...' }</p>

            <Button className='Button'>Add to Cart</Button>
        </div>
    );
};

export default Product;
