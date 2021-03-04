import React, { useState, useEffect, useContext } from "react";

import ProductContext from "../context";

import DisplayProductPreview from "./components/DisplayProductPreview/DisplayProductPreview";

let ProductContainer = function (props) {
  const [CurrentProducts, setCurrentProducts] = useState(
    []
  ); /* all the list of products for display */
  const [CurrentProductView, setCurrentProductView] = useState(
    {}
  ); /* Current product when clicked on in CurrentProducts */

  const context = useContext(ProductContext);

  useEffect(() => { /* on component mount will update all the current products and will update the current view / product */



  }, [CurrentProductView] );

  const HandleProductChange = (e) => {};

  const CurrentProductViewHandler = (e) => {};

  return (
    <>
      <DisplayProductPreview
        styles={context.productStyles}
        changeView={CurrentProductViewHandler}
      />
      <div>Product Detail Container</div>
    </>
  );
};

export default ProductContainer;
