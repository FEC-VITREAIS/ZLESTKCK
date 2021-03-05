import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import ProductContext from './context.jsx';

import fetchProductDetails from './FetchData/fetchProductDetails.js';
import fetchRelatedProducts from './FetchData/fetchRelatedProducts.js';
import fetchRelatedStyleData from './FetchData/fetchRelatedStyleData.js';
import fetchQA from './FetchData/fetchQA.js';
import fetchStyles from './FetchData/fetchStyles.js';
import fetchReviews from './FetchData/fetchReviews.js'

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
  const [relatedStyleData, setrelatedStyleData] = useState([]);
  const [productQA, setProductQA] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [reviewsSortBy, setReviewsSortBy] = useState('newest'); //set the default reviews to sort by newest


  // CURRENT PRODUCT STATE
  var fetchCurrentProduct = () => {

    fetchProductDetails(currentProduct)
    .then((data) => {
      setCurrentProductDetails(data);
      // console.log('current product: ', data);
    })

  }

  var updateCurrentProduct = (newProductID) => {
    //this works and updates the current product
    setProduct(newProductID)
  }


  // RELATED ITEMS STATE
  var fetchRelatedItems = () => {

    fetchRelatedProducts(currentProduct)
    .then((relatedItemsData) => {

      setRelatedItems(relatedItemsData);

    })

  }


  // QA STATE
  var fetchProductQA = () => {

    fetchQA(currentProduct)
    .then((data) => {
      // console.log('all product questions and answers', data);

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
  }, [currentProduct]);
  //current product above is the variable that hooks is watching before allowing a re-render. Re-render will only occur if change in current product is detected.


  // PROVIDER AND APP STRUCTURE (CONTAINERS)
  return (
    <ProductContext.Provider value={{
      relatedProducts: relatedItems,
      // relatedStyleData: relatedStyleData,
      productQA: productQA,
      updateCurrentProduct: updateCurrentProduct,
      productStyles: productStyles,
      productReviews: productReviews,
      changeReviewSortBy: changeReviewSortBy
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