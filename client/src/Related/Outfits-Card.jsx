import React, {useContext} from 'react';

var OutfitsCard = ({product, removeOutfit}) => {

  // console.log('product: ', product);

  return (
    <div className='outfits-list-card'>
      <span className="fa fa-times checked" onClick={() => {removeOutfit(product)}}></span>
      <img className='outfits-list-card-img' src={product.styles.photo}/>
      <h3 className='outfits-card-category'>{product.category}</h3>
      <h2 className='outfits-card-name'>{product.name}</h2>
      <div className='outfits-card-price'>{`$100`}</div>
      <div className='outfits-card-rating'>Star Rating</div>
    </div>
  )

}

export default OutfitsCard;