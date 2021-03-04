import React, {useState, useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.jsx';

var RelatedList = ({className}) => {
  const context = useContext(ProductContext);

  return (
    <div className={className}>
    {context.relatedProducts.map((product, ind) => {
      return (
        <RelatedListCard product={product} photo={context.relatedThumbnails[ind]} key={product.id}/>
      )
    })}
    </div>
  )
}

export default RelatedList;