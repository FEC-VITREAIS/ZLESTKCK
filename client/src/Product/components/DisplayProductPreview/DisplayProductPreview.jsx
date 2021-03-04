import React, { useState, useEffect } from "react";

/* going to take in product pictures to display them and on click
will display the current product being viewed and will display the size of that product
*/

let DisplayProductPreview = (products) => {
  return (
    <>
      <div className="DisplayProductPreviewContainer">
        {products.map((product) => {

          const StylesArr =
            product.results; /* Objects that have styles and photots theres a go to photo somewhere in here */
            
          const { photos } = StylesArr[0];

          const thumbnail_url = photos[0].thumbnail_url;
          
          return <img src={thumbnail_url}></img>

        })}
      </div>
    </>
  );
};

export default DisplayProductPreview;
