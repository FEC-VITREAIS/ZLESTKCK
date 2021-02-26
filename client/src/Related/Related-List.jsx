import React from 'react';
import RelatedListCard from './Related-List-Card.jsx';


var RelatedList = ({className}) => {
  return (
    <div className={className}> 
    <RelatedListCard/>
    <RelatedListCard/>
    <RelatedListCard/>
    </div>
  )
}

export default RelatedList;