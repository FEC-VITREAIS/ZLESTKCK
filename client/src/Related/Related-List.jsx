import React, {useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.jsx';

var RelatedList = () => {
  const context = useContext(ProductContext);

  return (
    <div className='related-list'>
    {context.relatedProducts.map((product, ind) => {
      return (
        <RelatedListCard product={product} photo={''} key={product.id}  photo={product.styles.photo} price={product.styles.price}/>
      )
    })}
    </div>
  )


  // return (
  //   <div class="gallery js-flickity">
  //     <div class="gallery-cell"></div>
  //     <div class="gallery-cell"></div>
  //     <div class="gallery-cell"></div>
  //     <div class="gallery-cell"></div>
  //     <div class="gallery-cell"></div>
  //     <div class="gallery-cell"></div>
  //     <div class="gallery-cell"></div>
  //  </div>
  // )


}

export default RelatedList;

//context.relatedStyleData[ind].photo
