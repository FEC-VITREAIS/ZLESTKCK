import React, {useState, useContext, useEffect} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';


let RelatedContainer = function(props) {
  return (
    <div className='related-container'>
      Related Products Container
      <RelatedList className={'related-list'}/>
      <RelatedList className={'outfits-list'}/>
    </div>
  )
}

export default RelatedContainer