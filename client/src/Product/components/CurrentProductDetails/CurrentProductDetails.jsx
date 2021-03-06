import React from "react";

const CurrentProductDetails = ({ CurrentProductInfo, CurrentProductView }) => {
  console.log(CurrentProductView, "product view");

  if (CurrentProductInfo.defaultProp === true) {
    return <div></div>;
  }

  let product = CurrentProductInfo;
  console.log(product , 'PRODUCT')
  let productStyle = CurrentProductView;
  console.log(productStyle, 'PRODUCT STYLE')

  return (
    <>
      <div className='readAllReviewsContainer'>

        <a href="related-container" > Read All Reviews!  </a>

      </div>

      <div>
        {" "}
        current product details
        <div></div>
        <div className="priceText">
          {productStyle.sale_price === 0 ||
          productStyle.sale_price === undefined ||
          productStyle.sale_price === null ? (
            <div> ${productStyle.default_price || productStyle.original_price} </div>
          ) : (
            <div>
              {" "}
              {sale_price} {productStyle.original_price || productStyle.default_price}{" "}
            </div>
          )}
        </div>
        <div className="styleText">STYLE > {productStyle.name}</div>
      </div>
    </>
  );
};

export default CurrentProductDetails;
