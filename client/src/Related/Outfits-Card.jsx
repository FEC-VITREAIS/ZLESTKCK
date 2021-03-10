import React from 'react';
import StarRating from '../Reviews/Star-Rating.jsx';

var OutfitsCard = ({product, removeOutfit}) => {

  // console.log('product: ', product);

  return (
    <div className='outfits-list-card'>
      <span className="fa fa-times checked" onClick={() => {removeOutfit(product)}}></span>
      <img className='outfits-list-card-img' src={product.styles.photo}/>
      <h3 className='outfits-card-category'>{product.category}</h3>
      <h2 className='outfits-card-name'>{product.name}</h2>
      <div className='outfits-card-price'>{`$100`}</div>
      <StarRating
      ratingsList={product.ratings}
      class={'outfit-card-ratings'}
      dimension={'20px'}
      />
    </div>
  )

}

export default OutfitsCard;