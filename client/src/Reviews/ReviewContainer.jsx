import React, {useContext, useEffect} from 'react'
import axios from 'axios';
import API_KEY from '../../../config.js';

const ProductContext = React.createContext(0);

let ReviewContainer = function(props) {

//   const value = useContext(ProductContext);

//   var fetchAll = () => {
//     axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11001&page=1',
//     {
//       headers: {
//         Authorization: API_KEY
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   }

  // useEffect(() => {
  //   fetchAll();
  // })



  return (
  //   <ProductContext.Provider>
      <div>Product Reviews Container</div>
  //     <div>{value}</div>
  //   </ProductContext.Provider>
  )
}

export default ReviewContainer