import axios from 'axios';
import API_KEY from '../../../config.js';
import fetchProductDetails from './fetchProductDetails.js';


var fetchStyles = (productID) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`,
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((data) => {
    // console.log('style data: ', data);
    return data.data.results
  })
  .catch((err) => {
    // console.log(err);
    return err;
  })

}

export default fetchStyles;