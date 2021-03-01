import React, {useState, useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.js';

var RelatedList = ({className}) => {
  const context = useContext(ProductContext);

  return (
    <div className={className}>
    {context.relatedProducts.map((product) => {
      return (
        <RelatedListCard product={product} key={product.id}/>
      )
    })}
    </div>
  )
}

export default RelatedList;