import React, {useContext} from 'react';

var OutfitsCard = ({product, removeOutfit}) => {

  // console.log('product: ', product);

  return (
    <div className='related-list-card'>
      <span className="fa fa-times checked" onClick={() => {removeOutfit(product)}}></span>
      <img className='related-list-card-img' src={product.styles.photo}/>
      <div className='related-card-category'>{product.category}</div>
      <div className='related-card-name'>{product.name}</div>
      <div className='related-card-price'>{`$100`}</div>
      <div className='related-card-div'>Star Rating</div>
    </div>
  )

}

export default OutfitsCard;