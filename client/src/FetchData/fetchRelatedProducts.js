import axios from 'axios';
import API_KEY from '../../../config.js';
import fetchProductDetails from './fetchProductDetails.js';
import fetchStyles from './fetchStyles.js';


var fetchRelatedProducts = (productID) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/related`,
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((data) => {
    // console.log(data);
    var allRelatedItems = [];

    data.data.forEach((item) => {
      // console.log(item);
      allRelatedItems.push(fetchProductDetails(item))
    })

    // console.log(allRelatedItems);

    return Promise.all(allRelatedItems);
  })
  .then((allRelatedItems) => {
    // console.log('all related styles: ', allRelatedItems);

    var itemsWithStyle = [];

    allRelatedItems.forEach((product) => {
      var p = new Promise((resolve, reject) => {
        fetchStyles(product.id)
        .then((styleList) => {
          product.styles = {
            photo: styleList[0].photos[0].url,
            price: styleList[0].original_price,
            salePrice: styleList[0].sale_price
          }
          resolve(product)
        })
      })

      itemsWithStyle.push(p);
    })

    //console.log('new list: ', itemsWithStyle);

    return Promise.all(itemsWithStyle);

  })
  .catch((err) => {
    // console.log(err);
    return err;
  })
  //TODO: grab the review data here

}

export default fetchRelatedProducts;
