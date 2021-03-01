import axios from 'axios';
import API_KEY from '../../../config.js';
import fetchProductDetails from './fetchProductDetails.js';


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

    // allRelatedItems = data.data.map((relatedItem) => {
    //   fetchProductDetails(allRelatedItems)
    // })

    data.data.forEach((item) => {
      console.log(item);
      allRelatedItems.push(fetchProductDetails(item))
    })

    console.log(allRelatedItems);

    return Promise.all(allRelatedItems);
    // return allRelatedItems
    // return data.data;
  })
  .catch((err) => {
    // console.log(err);
    return err;
  })

}

export default fetchRelatedProducts;