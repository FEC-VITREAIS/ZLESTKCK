import React, {useContext} from 'react';
import ProductContext from '../context.jsx';

var ModalWindowTable = ({product, sharedFeatures}) => {
  const context = useContext(ProductContext);

  var displayComparedFeatures = (feature) => {
      console.log('product 1 features: ', product.features);
      console.log('current product features: ', context.currentProductDetails.features);
      console.log('shared features: ', sharedFeatures);


      return (
        <tr>
          <th className='modal-table-feature-value'>{sharedFeatures[feature].currentProductValue}</th>
          <th className='modal-table-feature-name'>{feature}</th>
          <th className='modal-table-feature-value'>{sharedFeatures[feature].comparedProductValue}</th>
        </tr>
      )
  }

  return (
    <table className='related-modal-table'>
    <tbody>
      <tr>
        <th className='related-modal-table-title'>{context.currentProductDetails.name}</th>
        <th className='related-modal-table-title'></th>
        <th className='related-modal-table-title'>{product.name}</th>
      </tr>
      {Object.keys(sharedFeatures).map((feature) => {
        return (
          displayComparedFeatures(feature)
        )
      })}
    </tbody>
  </table>
  )

}

export default ModalWindowTable;
