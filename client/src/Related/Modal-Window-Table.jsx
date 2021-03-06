import React, {useContext, useEffect, useState} from 'react';
import ProductContext from '../context.jsx';

var ModalWindowTable = ({product, sharedFeatures}) => {
  const context = useContext(ProductContext);

  var displayComparedFeatures = (feature) => {
      return (
        <tr>
          <th>1 has feature?</th>
          <th>{feature}</th>
          <th>2 has feature?</th>
        </tr>
      )
  }

  return (
    <table className='related-modal-table'>
    <tbody>
      <tr>
        <th className='related-modal-table-title'>1</th>
        <th className='related-modal-table-title'>Features</th>
        <th className='related-modal-table-title'>2</th>
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
