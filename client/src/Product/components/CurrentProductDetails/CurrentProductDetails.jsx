import React from "react";

const CurrentProductDetails = ({ CurrentProductInfo }) => {
  console.log(CurrentProductInfo);

  if ( CurrentProductInfo.defaultProp === true) {
    return <div></div>;
  }

  let product = CurrentProductInfo;

  // if (  )

  return (
    <div>
      {" "}
      current product details
      <div></div>
      <div className="priceText">
        {product.sale_price === 0 || product.sale_price === undefined ? (
          <div> {product.default_price || product.original_price} </div>
        ) : (
          <div>
            {" "}
            {sale_price} {product.original_price || product.default_price}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentProductDetails;
