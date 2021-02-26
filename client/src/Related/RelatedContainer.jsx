import React from 'react';
import './styles/styles.css';
import RelatedList from './Related-List.jsx';

let RelatedContainer = function(props) {
  return (
    <div className='related-container'>
      Related Products Container
      <RelatedList />
      <RelatedList />
    </div>
  )
}

export default RelatedContainer