import React, {useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.js';

var RelatedList = ({className}) => {
  const context = useContext(ProductContext);

  return (
    <div className={className}>
    <ol>
      {context.relatedProducts.map(p => {
        return (
          <li>{p.id}</li>
        )
      })}
    </ol>
    <RelatedListCard/>
    <RelatedListCard/>
    <RelatedListCard/>
    </div>
  )
}

export default RelatedList;