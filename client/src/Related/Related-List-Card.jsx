import React from 'react';

var RelatedListCard = ({product}) => {
  return (
    <div className='related-list-card'>
      <img className='related-list-card-img'/>
      <div className='related-card-category'>{product.category}</div>
      <div className='related-card-name'>{product.name}</div>
      <div className='related-card-price'>{`$${product.default_price}`}</div>
      <div className='related-card-div'>Star Rating</div>
    </div>
  )
}

export default RelatedListCard;