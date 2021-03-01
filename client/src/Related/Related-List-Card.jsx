import React, {useContext} from 'react';
import ProductContext from '../context.js';


var RelatedListCard = ({product}) => {
  const context = useContext(ProductContext);

  const handleClick = (e) => {
    console.log(product.id);
    context.updateCurrentProduct(product.id)
  }

  return (
    <div className='related-list-card' onClick={handleClick}>
      <img className='related-list-card-img'/>
      <div className='related-card-category'>{product.category}</div>
      <div className='related-card-name'>{product.name}</div>
      <div className='related-card-price'>{`$${product.default_price}`}</div>
      <div className='related-card-div'>Star Rating</div>
    </div>
  )
}

export default RelatedListCard;