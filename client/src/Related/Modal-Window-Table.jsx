import React, {useContext, useEffect, useState} from 'react';
import ProductContext from '../context.jsx';

var ModalWindowTable = ({product, sharedFeatures}) => {
  const context = useContext(ProductContext);

  var displayComparedFeatures = (feature) => {
      console.log('product 1 features: ', product.features);
      console.log('current product features: ', context.currentProductDetails.features);
      console.log('shared features: ', sharedFeatures);


      return (
        <tr>
          <th>{sharedFeatures[feature].currentProductValue}</th>
          <th>{feature}</th>
          <th>{sharedFeatures[feature].comparedProductValue}</th>
        </tr>
      )
  }

  return (
    <table className='related-modal-table'>
    <tbody>
      <tr>
        <th className='related-modal-table-title'>Current Product Value</th>
        <th className='related-modal-table-title'>Features</th>
        <th className='related-modal-table-title'>Compared Product Value</th>
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
