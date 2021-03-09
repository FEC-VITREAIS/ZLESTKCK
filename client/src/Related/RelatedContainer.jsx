import React, {useContext} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';
import YourOutfitsList from './Your-Outfits-List.jsx';
import ProductContext from '../context.jsx';

let RelatedContainer = function(props) {
  const context = useContext(ProductContext);

  //only renders when related style data is recieved by API
  if (context.relatedProducts && context.relatedProducts.length) {

    return (
      <div className='related-container'>
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