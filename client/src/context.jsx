import React, {createContext} from 'react';

const ProductContext = React.createContext({
  currentProduct: 0, //product id
  updateCurrentProduct: (newProductID) => {},
  relatedProducts: [],
  updateRelatedProducts: () => {},
  relatedStyleData: [],
  productQA: [],
  updateProductQA: () => {},
  productStyles: [],
  productReviews: [],
  changeReviewSortBy: (sortby) => {}
});

export default ProductContext;