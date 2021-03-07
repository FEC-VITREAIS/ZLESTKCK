import React, {useState, useContext, useEffect} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';
import YourOutfitsList from './Your-Outfits-List.jsx';
import ProductContext from '../context.jsx';
import Carousel from './Carousel-Test.jsx';


let RelatedContainer = function(props) {
  const context = useContext(ProductContext);

  //useEffect(()=> {}, [context.relatedProducts])
  // console.log('related container proudcts: ', context.relatedProducts);

  //only renders when related style data is recieved by API
  if (context.relatedProducts && context.relatedProducts.length) {

    return (
      <div className='related-container'>
        Related Products Container
        <Carousel />
        <RelatedList />
        <YourOutfitsList />
      </div>
    )

  } else {
    return (
      <div></div>
    )
  }


}

export default RelatedContainer