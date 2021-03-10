import React, {useContext, useEffect} from 'react';
import ProductContext from '../context.jsx';
import ModalWindowTable from './Modal-Window-Table.jsx';


var RelatedModalWindow = ({handleModalClose, product, sharedFeatures}) => {
  const context = useContext(ProductContext);

  // var compareProductName = () => {

  //   // console.log(`${product.name} vs ${context.currentProductDetails.name}`)
  //   return (
  //     <p className='related-modal-items'>{product.name} vs. {context.currentProductDetails.name}</p>
  //   )
  // }

  console.log('modal window product: ', product.name);

  return (
    <div class="modal-content">
      <span id='close-modal' class='close' onClick={handleModalClose}>&times;</span>
      <h3 className='modal-window-comparing'>Comparing</h3>
      {/* {compareProductName()} */}
      <ModalWindowTable product={product} sharedFeatures={sharedFeatures} key={product.id}/>
    </div>
  )

  // return (
  //   <div id='comparison-modal' class='comparison-modal'>
  //     <div class="modal-content">
  //     <span id='close-modal' class='close' onClick={handleModalClose}>&times;</span>
  //     <h3 className='modal-window-comparing'>Comparing</h3>
  //     {/* {compareProductName()} */}
  //     <ModalWindowTable product={product} sharedFeatures={sharedFeatures} key={product.id}/>
  //     </div>
  //   </div>
  // )

}

export default RelatedModalWindow;