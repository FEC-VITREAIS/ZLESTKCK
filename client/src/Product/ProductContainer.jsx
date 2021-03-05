import React, { useState, useEffect, useContext } from "react";

import ProductContext from "../context";

import DisplayCurrentProduct from "./components/DisplayCurrentProduct/DisplayCurrentProduct";
import DisplayProductPreview from "./components/DisplayProductPreview/DisplayProductPreview";

let ProductContainer = function (props) {
  const [CurrentProducts, setCurrentProducts] = useState(
    []
  ); /* all the list of products for display */
  const [CurrentProductView, setCurrentProductView] = useState(
    {}
  ); /* Current product when clicked on in CurrentProducts */

  const context = useContext(ProductContext);

  useEffect(() => {
    /* on component mount will update all the current products and will update the current view / product */

    const currentStyles = context.productStyles;

    console.log(currentStyles, 'context')
    setCurrentProducts(currentStyles);
    setCurrentProductView(currentStyles[0]);

  }, [context.productStyles]); 

  const HandleProductChange = (e, product) => {
    // console.log("you clicked on a product!", product);

    setCurrentProductView(product);
  };

  return (
    <>
      <DisplayCurrentProduct currentProduct={CurrentProductView} />
      <DisplayProductPreview
        styles={CurrentProducts}
        changeView={HandleProductChange}
      />
      <div>Product Detail Container</div>
    </>
  );
};

export default ProductContainer;
