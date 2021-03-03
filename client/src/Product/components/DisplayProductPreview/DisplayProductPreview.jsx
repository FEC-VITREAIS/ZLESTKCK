import React, { useState, useEffect } from "react";

/* going to take in product pictures to display them and on click
will display the current product being viewed and will display the size of that product
*/

let DisplayProductPreview = ({ styles }) => {

  console.log(styles, 'styles')

  if (styles.length === undefined || styles.length === 0) {
    return <div> place holder for when products api called </div>;
  }

  return (
    <>
      <div className="DisplayProductPreviewContainer">
        {styles.map((product) => {
          
          const { photos } = product;

          const { thumbnail_url } = photos[0];

          return <img src={thumbnail_url}></img>;
        })}
      </div>
    </>
  );
};

export default DisplayProductPreview;
