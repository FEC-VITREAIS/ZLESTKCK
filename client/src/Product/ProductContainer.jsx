import React, { useState, useEffect } from 'react';

let ProductContainer = function(props) {

  const [CurrentProducts, setCurrentProducts] = useState([]); /* all the list of products for display */  
  const [CurrentProductView, setCurrentProductView] = useState({}); /* Current product when clicked on in CurrentProducts */ 
  
  const HandleProductChange = (e) => {

  }

  return (

    <div>Product Detail Container</div>
  )
}


export default ProductContainer;