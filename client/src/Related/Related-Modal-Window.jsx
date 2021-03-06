import React, {useContext} from 'react';
import ProductContext from '../context.jsx';
import ModalWindowTable from './Modal-Window-Table.jsx';


var RelatedModalWindow = ({handleModalClose, product}) => {
  const context = useContext(ProductContext);
  // console.log('product id: ', product.id);
  // console.log('current product id: ', context.currentProductDetails)

  return (
    <div id='comparison-modal' class='comparison-modal'>
      <div class="modal-content">
      <span id='close-modal' class='close' onClick={handleModalClose}>&times;</span>
      <p>Comparing</p>
      <p>{product.name} vs {context.currentProductDetails.name}</p>
      <ModalWindowTable product={product}/>
      </div>
    </div>
  )

}

export default RelatedModalWindow;