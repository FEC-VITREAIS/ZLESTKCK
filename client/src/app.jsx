import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import ProductContext from './context.jsx';

import fetchProductDetails from './FetchData/fetchProductDetails.js';
import fetchRelatedProducts from './FetchData/fetchRelatedProducts.js';
import fetchQA from './FetchData/fetchQA.js';
import fetchStyles from './FetchData/fetchStyles.js';
import fetchReviews from './FetchData/fetchReviews.js'
import fetchReviewsMetaData from './FetchData/fetchReviewsMetaData.js'

import ProductContainer from './Product/ProductContainer.jsx'
import QAContainer from './QA/QAContainer.jsx'
import RelatedContainer from './Related/RelatedContainer.jsx'
import ReviewContainer from './Reviews/ReviewContainer.jsx'



let App = function(props) {

  // console.log('rerender!');

  // STATE HOOKS
  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const [currentProduct, setProduct] = useState("11101"); //using 11101 as the default product
  const [relatedItems, setRelatedItems] = useState([]);
  const [productQA, setProductQA] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [productReviewsMetaData, setProductReviewsMetaData] = useState({});
  const [reviewsSortBy, setReviewsSortBy] = useState('newest'); //set the default reviews to sort by newest


  // CURRENT PRODUCT STATE
  var fetchCurrentProduct = () => {

    fetchProductDetails(currentProduct)
    .then((data) => {
      setCurrentProductDetails(data);
      //console.log('current product: ', data);
    })

  }

  var updateCurrentProduct = (newProductID) => {
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
      //console.log('all product questions and answers', data);

      setProductQA(data)
    })
  };

  var fetchProductStyles = () => {
    fetchStyles(currentProduct)
    .then((data) => {
      // console.log('current product styles: ', data)
      setProductStyles(data)
    })
  }

  var fetchProductReviews = () => {

    fetchReviews(currentProduct, reviewsSortBy)
    .then((data) => {
      // console.log('product review data: ', data);
      setProductReviews(data);
    })

  }

  var fetchProductReviewsMetaData = () => {

    fetchReviewsMetaData(currentProduct)
    .then((data) => {
      // console.log('product review meta data: ', data);
      setProductReviewsMetaData(data);
    })
  }

  var changeReviewSortBy = (sortBy) => {
    //sortBy should be a string containing
    //'newest', 'helpful', or 'relevant'
    setReviewsSortBy(sortBy)
  }


  // EFFECT HOOKS
  useEffect(() => {
    fetchRelatedItems()
    fetchCurrentProduct()
    fetchProductQA()
    fetchProductStyles()
    fetchProductReviews()
    fetchProductReviewsMetaData()
  }, [currentProduct]);


  // PROVIDER AND APP STRUCTURE (CONTAINERS)
  return (
    <ProductContext.Provider value={{
      currentProductDetails: currentProductDetails,
      relatedProducts: relatedItems,
      productQA: productQA,
      updateCurrentProduct: updateCurrentProduct,
      productStyles: productStyles,
      productReviews: productReviews,
      changeReviewSortBy: changeReviewSortBy,
      productReviewsMetaData: productReviewsMetaData
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