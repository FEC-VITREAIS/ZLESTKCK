import React, {useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.jsx';

var RelatedList = () => {
  const context = useContext(ProductContext);
  console.log('related list: ', context.relatedProducts)
  console.log('product: ', Object.keys(context.relatedProducts[0]))
  console.log('style list: ', context.relatedProducts[0].styles)


  return (
    <div className={'related-list'}>
    {context.relatedProducts.map((product, ind) => {
      return (
        <RelatedListCard product={product} photo={''} key={product.id}  photo={''} price={100}/>
      )
    })}
    </div>
  )


}

export default RelatedList;

//context.relatedStyleData[ind].photo
