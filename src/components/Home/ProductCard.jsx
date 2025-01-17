import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material';

const ProductCard = ({product}) => {

  const options = {
      size: "medium",
      value: product.ratings,
      readOnly: true,
      precision: 0.5,
  };

  return (
    
    <Link className='productCard' to={`/product/${product._id}`}>

        <img src={product.images[0].url} alt={product.name} />

        <p>{product.name}</p>

        <div className='rating'>
            <Rating {...options}/> 
            <div className='productCardSpan'> ({product.numOfReview} Reviews) </div>
        </div>
        
        <span>{`₹ ${product.price}`}</span>

    </Link>

  );
};

export default ProductCard