import React, {useContext} from 'react';
import ProductContext from '../context.jsx';
import RelatedProductContext from './context/related-context.js';
import ModalWindowTable from './Modal-Window-Table.jsx';


var RelatedModalWindow = (props) => {
  const context = useContext(ProductContext);
  const relatedContext = useContext(RelatedProductContext);

  return (
    <div className="modal-content">
      <span className="fa fa-times" onClick={relatedContext.handleModalClose}></span>
      <h2 className='modal-window-comparing'>Comparing</h2>
      <ModalWindowTable
      key={relatedContext.modalProduct.id}/>
    </div>
  )

}

export default RelatedModalWindow;