import React, { useState, useEffect, useContext } from "react";

import ProductContext from "../context";

import DisplayCurrentProduct from "./components/DisplayCurrentProduct/DisplayCurrentProduct";
import DisplayProductPreview from "./components/DisplayProductPreview/DisplayProductPreview";

import CurrentProductDetails from "./components/CurrentProductDetails/CurrentProductDetails";
import SelectStyle from "./components/SelectStyle/SelectStyle";

// import './styles/'

let ProductContainer = function (props) {
  const [CurrentProductInfo, setCurrentProductInfo] = useState({});

  const [CurrentProducts, setCurrentProducts] = useState(
    []
  ); /* all the list of products for display */
  const [CurrentProductView, setCurrentProductView] = useState(
    undefined
  ); /* Current product when clicked on in CurrentProducts */

  const context = useContext(ProductContext);

  useEffect(() => {
    /* on component mount will update all the current products and will update the current view / product */

    const currentStyles = context.productStyles;
    const currentProductInfo = context.currentProductDetails;

    console.log(currentStyles, "product details");

    setCurrentProducts(currentStyles);
    setCurrentProductView(currentStyles[0]);

    setCurrentProductInfo(currentProductInfo);
  }, [context.productStyles, context.currentProductDetails]);

  const HandleProductChange = (e, product) => {
    // console.log("you clicked on a product!", product);

    setCurrentProductView(product);
  };

  return (
    <>
      <div id="ProductContainer">
        <div className="carouselContainer">
          <DisplayCurrentProduct
            currentProduct={
              CurrentProductView || { photos: [{ thumbnail_url: "" }] }
            }
          />
          <DisplayProductPreview
            styles={CurrentProducts}
            changeView={HandleProductChange}
          />
        </div>

        <CurrentProductDetails
          CurrentProductInfo={
            CurrentProductInfo || {
              original_price: undefined,
              sale_price: undefined,
              default_price: undefined,
              defaultProp: true,
            }
          }
          CurrentProductView={CurrentProductView || { name: "" }}
        />

        <SelectStyle
          styles={CurrentProducts}
          changeView={HandleProductChange}
        />

        <div>Product Detail Container</div>
      </div>
    </>
  );
};

export default ProductContainer;
