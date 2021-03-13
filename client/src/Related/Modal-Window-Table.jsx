import React, {useContext} from 'react';
import ProductContext from '../context.jsx';
import RelatedProductContext from './context/related-context';

var ModalWindowTable = () => {
  const context = useContext(ProductContext);
  const relatedContext = useContext(RelatedProductContext);

  //recieves the sharedFeatures object from it's parent 
  //and renders each feature as table rows for the modal window
  var displayComparedFeatures = (feature) => {
      return (
        <tr>
          <th className='modal-table-feature-value'>
            {relatedContext.sharedFeatures[feature].currentProductValue}
          </th>
          <th className='modal-table-feature-name'>
            {feature}
          </th>
          <th className='modal-table-feature-value'>
            {relatedContext.sharedFeatures[feature].comparedProductValue}
          </th>
        </tr>
      )
  }

  return (
    <table className='related-modal-table'>
    <tbody>
      <tr>
        <th className='related-modal-table-title'>
          {context.currentProductDetails.name}
        </th>
        <th className='related-modal-table-title'></th>
        <th className='related-modal-table-title'>
          {relatedContext.modalProduct.name}
        </th>
      </tr>
      {Object.keys(relatedContext.sharedFeatures).map((feature) => {
        return (
          displayComparedFeatures(feature)
        )
      })}
    </tbody>
  </table>
  )

}

export default ModalWindowTable;
