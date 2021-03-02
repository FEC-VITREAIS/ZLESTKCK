import React, {createContext} from 'react';

const ProductContext = React.createContext({
  currentProduct: 0,
  updateCurrentProduct: (newProductID) => {},
  relatedProducts: [],
  updateRelatedProducts: () => {},
});

export default ProductContext;