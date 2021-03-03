import React, { useState, useEffect, useContext } from "react";

import ProductContext from '../context';

import DisplayProductPreview from './components/DisplayProductPreview/DisplayProductPreview';

let ProductContainer = function (props) {
  const [CurrentProducts, setCurrentProducts] = useState(
    []
  ); /* all the list of products for display */
  const [CurrentProductView, setCurrentProductView] = useState(
    {}
  ); /* Current product when clicked on in CurrentProducts */

  const context = useContext(ProductContext);

  const HandleProductChange = (e) => {};

  return (
    <>
      < DisplayProductPreview styles={context.productStyles} />
      <div>Product Detail Container</div>
    </>
  );
};

export default ProductContainer;
