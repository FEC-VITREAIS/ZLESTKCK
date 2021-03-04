import React, {useState, useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.jsx';

var RelatedList = ({className}) => {
  const context = useContext(ProductContext);
  console.log('related style data: ', context.relatedStyleData);

  var awaitStyleData = (ind) => {
    if (context.relatedStyleData.length) {
      return context.relatedStyleData[ind].photo;
    } else {
      return '';
    }
  }

  return (
    <div className={className}>
    {context.relatedProducts.map((product, ind) => {
      return (
        <RelatedListCard product={product} photo={''} key={product.id}  photo={awaitStyleData(ind)}/>
      )
    })}
    </div>
  )
}

export default RelatedList;

//context.relatedStyleData[ind].photo