import React, {createContext} from 'react';

const ProductContext = React.createContext({
  displayModal: false,
  setDiplayModal: (bool) => {},
  sharedFeatures: {},
  setsharedFeatures: () => {}
});

export default ProductContext;