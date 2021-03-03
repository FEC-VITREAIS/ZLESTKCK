import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import ProductContext from './context.jsx';

import fetchProductDetails from './FetchData/fetchProductDetails.js';
import fetchRelatedProducts from './FetchData/fetchRelatedProducts.js';
import fetchQA from './FetchData/fetchQA.js';

import ProductContainer from './Product/ProductContainer.jsx'
import QAContainer from './QA/QAContainer.jsx'
import RelatedContainer from './Related/RelatedContainer.jsx'
import ReviewContainer from './Reviews/ReviewContainer.jsx'



let App = function(props) {

  // console.log('rerender!');

  // STATE HOOKS
  const [currentProduct, setProduct] = useState("11101"); //using 11101 as the default product
  const [relatedItems, setRelatedItems] = useState([]);
  const [productQA, setProductQA] = useState([]);


  // CURRENT PRODUCT STATE
  var fetchCurrentProduct = () => {

    fetchProductDetails(currentProduct)
    .then((data) => {
      console.log('current product: ', data);
    })

  }

  var updateCurrentProduct = (newProductID) => {
    // console.log('new product id: ', newProductID);
    // console.log('current product: ', currentProduct)

    //this works and updates the current product
    setProduct(newProductID)
  }




  // RELATED ITEMS STATE
  var fetchRelatedItems = () => {

    var relatedItems = [];

    fetchRelatedProducts(currentProduct)
    .then((data) => {
      //data will contain all of the related items product objects
      // console.log('all related products', data);

      setRelatedItems(data);

    })
  }

  // QA STATE
  var fetchProductQA = () => {

    fetchQA(currentProduct)
    .then((data) => {
      console.log('all product questions and answers', data);

      setProductQA(data)
    })
  }


  // EFFECT HOOKS
  useEffect(() => {
    console.log('use effect current product:', currentProduct)
    fetchRelatedItems()
    fetchCurrentProduct()
    fetchQA()
  }, [currentProduct]);


  // PROVIDER AND APP STRUCTURE (CONTAINERS)
  return (
    <ProductContext.Provider value={{
      relatedProducts: relatedItems,
      productQA: productQA,
      updateCurrentProduct: updateCurrentProduct
    }}>
      <div>
        <ProductContainer />
        <RelatedContainer />
        <QAContainer />
        <ReviewContainer />
      </div>
    </ProductContext.Provider>
  )
}


  //RENDER
ReactDOM.render(
  <App />,
  document.getElementById('app')
);