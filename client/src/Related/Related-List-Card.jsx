import React, {useContext} from 'react';
import ProductContext from '../context.jsx';


var RelatedListCard = ({product, photo, price}) => {
  const context = useContext(ProductContext);

  // console.log('related list card product: ', product);


  const handleClick = (e) => {
    // console.log(product.id);
    context.updateCurrentProduct(product.id)
  }

  return (
    <div className='related-list-card' onClick={handleClick}>
      <span class="fa fa-star checked"></span>
      <img className='related-list-card-img' src={photo}/>
      <div className='related-card-category'>{product.category}</div>
      <div className='related-card-name'>{product.name}</div>
      <div className='related-card-price'>{`$${price}`}</div>
      <div className='related-card-div'>Star Rating</div>
    </div>
  )
}

export default RelatedListCard;