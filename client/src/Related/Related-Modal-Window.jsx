import React, {useContext, useEffect} from 'react';
import ProductContext from '../context.jsx';
import ModalWindowTable from './Modal-Window-Table.jsx';


var RelatedModalWindow = ({handleModalClose, product, sharedFeatures}) => {
  const context = useContext(ProductContext);
  // console.log('product id: ', product.id);
  // console.log('current product id: ', context.currentProductDetails)



//   console.log(sharedFeatures);
//
  var compareProductName = () => {

    console.log(`${product.name} vs ${context.currentProductDetails.name}`)
    return (
      <p>{product.name} vs. {context.currentProductDetails.name}</p>
    )
  }

  console.log('modal window product: ', product.name);

  return (
    <div id='comparison-modal' class='comparison-modal'>
      <div class="modal-content">
      <span id='close-modal' class='close' onClick={handleModalClose}>&times;</span>
      <p>Comparing</p>
      {/* <p>{product.name} vs {context.currentProductDetails.name}</p> */}
      {compareProductName()}
      <ModalWindowTable product={product} sharedFeatures={sharedFeatures} key={product.id}/>
      </div>
    </div>
  )

}

export default RelatedModalWindow;