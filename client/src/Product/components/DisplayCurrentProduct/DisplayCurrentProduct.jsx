import React, { useState, useEffect } from "react";

const DisplayCurrentProduct = ({ currentProduct }) => {
  console.log(currentProduct, "this is the current product");

  let { thumbnail_url } = currentProduct.photos[0];

  if (thumbnail_url === "") {
    return <div> </div>;
  }

  // const [CurrentStyle, setStyle] = useState()

  return (
    <div className="DisplayCurrentProductContainer">
      <div className="photo-list"> </div>
      <div className="mainSlider"></div>
    </div>
  );
};


export default DisplayCurrentProduct;
