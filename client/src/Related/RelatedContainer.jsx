import React, {useState, useContext, useEffect} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';
import YourOutfitsList from './Your-Outfits-List.jsx';
import ProductContext from '../context.jsx';


let RelatedContainer = function(props) {
  const context = useContext(ProductContext);

  useEffect(()=> {}, [context.relatedStyleData])

  //only renders when related style data is recieved by API
  if (context.relatedStyleData && context.relatedStyleData.length) {

    return (
      <div className='related-container'>
        Related Products Container
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