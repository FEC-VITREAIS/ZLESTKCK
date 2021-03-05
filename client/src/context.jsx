import React, {createContext} from 'react';

const ProductContext = React.createContext({
  currentProductDetails: {},
  currentProduct: 0,
  updateCurrentProduct: (newProductID) => {},
  relatedProducts: [],
  updateRelatedProducts: () => {},
  productQA: [],
  updateProductQA: () => {},
  productStyles: [],
  productReviews: [],
  changeReviewSortBy: (sortby) => {}
});

export default ProductContext;