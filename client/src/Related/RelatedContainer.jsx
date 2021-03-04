import React, {useState, useContext} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';
import ProductContext from '../context.jsx';


let RelatedContainer = function(props) {
  const context = useContext(ProductContext);

    return (
      <div className='related-container'>
        Related Products Container
        <RelatedList className={'related-list'}/>
        <RelatedList className={'outfits-list'}/>
      </div>
    )

}

export default RelatedContainer