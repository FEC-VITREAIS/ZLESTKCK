import React, {useState, useEffect} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';


let RelatedContainer = function(props) {
  const [currentProduct, updateProduct] = useState([]);


  return (
    <div className='related-container'>
      Related Products Container
      <RelatedList className={'related-list'}/>
      <RelatedList className={'outfits-list'}/>
    </div>
  )
}

export default RelatedContainer