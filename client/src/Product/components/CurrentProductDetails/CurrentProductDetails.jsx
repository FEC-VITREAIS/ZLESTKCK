import React from "react";

const CurrentProductDetails = ({ CurrentProductInfo, CurrentProductView }) => {
  // console.log(CurrentProductView, "product view");

  if (CurrentProductInfo.defaultProp === true) {
    return <div></div>;
  }

  let product = CurrentProductInfo;
  let productStyle = CurrentProductView;

  return (
    <div>
      {" "}
      current product details
      <div></div>
      <div className="priceText">
        {product.sale_price === 0 ||
        product.sale_price === undefined ||
        product.sale_price === null ? (
          <div> ${product.default_price || product.original_price} </div>
        ) : (
          <div>
            {" "}
            {sale_price} {product.original_price || product.default_price}{" "}
          </div>
        )}
      </div>
      <div className="styleText">STYLE > {productStyle.name}</div>
    </div>
  );
};

export default CurrentProductDetails;
