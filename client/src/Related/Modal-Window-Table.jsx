import React, {useContext, useEffect, useState} from 'react';
import ProductContext from '../context.jsx';

var ModalWindowTable = ({product}) => {
  const context = useContext(ProductContext);
  const [sharedFeatures, setSharedFeatures] = useState({})

  // console.log('product features: ', product.features);
  // console.log('current product features: ', context.currentProductDetails.features);

  var compareProductFeatures = () => {
    var sharedFeatures = {};

    product.features.forEach((feature) => {
      sharedFeatures[feature.feature] = {
        firstItemVal: feature.value,
        secondItemVal: null
      };
    });

    context.currentProductDetails.features.forEach((feature) => {
      if (!sharedFeatures[feature.feature.firstItemVal]) {
        sharedFeatures[feature.feature] = {
          firstItemVal: null,
          secondItemVal: feature.value
        }
      } else {
        sharedFeatures[feature.feature] = {
          secondItemVal: feature.value
        }
      }
    })

    setSharedFeatures(sharedFeatures);
  }

  useEffect(compareProductFeatures, []);
  console.log(sharedFeatures);

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
    <table className='related-modal-table' onClick={compareProductFeatures}>
    <tbody>
      <tr>
        <th className='related-modal-table-title'>Item 1</th>
        <th className='related-modal-table-title'>Features</th>
        <th className='related-modal-table-title'>Item 1</th>
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


  /* { for (var features in sharedFeatures)
        return (
        <tr>
          <td><a href={entry.repo_url}>{entry.repo_name}</a></td>
          <td>{entry.username}</td>
          <td>{entry.rating}</td>
        </tr>
        )})} */