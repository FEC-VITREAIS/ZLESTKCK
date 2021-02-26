import React, {useState, useEffect} from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';
import axios from 'axios';
import API_KEY from '../../../config.js';

let RelatedContainer = function(props) {
  const [currentProduct, updateProduct] = useState([]);

  var fetchRelatedItems = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/related',
    {
      headers: {
        Authorization: API_KEY
      }
    })
    .then((data) => {
      console.log(data);
      updateProduct(data.data.map(item => { item }
        ))
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    // fetchRelatedItems(), currentProduct
  })


  return (
    <div className='related-container'>
      Related Products Container
      <RelatedList className={'related-list'}/>
      <RelatedList className={'outfits-list'}/>
    </div>
  )
}

export default RelatedContainer