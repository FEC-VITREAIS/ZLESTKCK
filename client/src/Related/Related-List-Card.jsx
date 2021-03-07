import React, {useContext, useState, useEffect} from 'react';
import ProductContext from '../context.jsx';
import RelatedModalWindow from './Related-Modal-Window.jsx';


var RelatedListCard = ({product}) => {
  const context = useContext(ProductContext);
  const [sharedFeatures, setSharedFeatures] = useState({})
  const [isModalDisplayed, setDisplayModal] = useState(false);

  const handleProductChange = (e) => {
    // console.log(product.id);
    context.updateCurrentProduct(product.id)
  };

  const handleModalClose = (e) => {
    setDisplayModal(false);
    setSharedFeatures({});
  }

  var compareProductFeatures = () => {
    var sharedFeatures = {};

    product.features.forEach((feature) => {
      if (feature.value === true) {
        sharedFeatures[feature.feature] = {
          comparedProductValue: '✓'
        }
      } else {
        sharedFeatures[feature.feature] = {
          comparedProductValue: JSON.parse(feature.value),
        };
      }
    });

    context.currentProductDetails.features.forEach((feature) => {
      if (feature.value === true) {
        sharedFeatures[feature.feature] = {
          currentProductValue: '✓'
        }
      } else {
        sharedFeatures[feature.feature] = {
          currentProductValue: JSON.parse(feature.value),
        };
      }
    })

    setSharedFeatures(sharedFeatures);
  }

  const displayModalWindow = (bool) => {
    if (bool) {
      return (
        <RelatedModalWindow handleModalClose={handleModalClose} product={product} sharedFeatures={sharedFeatures}/>
      )
    } else {
      return <></>
    }

  }

  return (
    <div className='related-list-card'>
      <span className="fa fa-star checked" onClick={() => {
        compareProductFeatures();
        setDisplayModal(true)
      } }></span>
      <img className='related-list-card-img' src={product.styles.photo}/>
      <h3 className='related-card-category'>{product.category}</h3>
      <h2 className='related-card-name' onClick={handleProductChange}>{product.name}</h2>
      <div className='related-card-price'>{`$${product.styles.price}`}</div>
      <div className='related-card-div'>Star Rating</div>
      {displayModalWindow(isModalDisplayed)}
    </div>
  )
}

export default RelatedListCard;