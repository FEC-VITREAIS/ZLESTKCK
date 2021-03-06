import React, {useContext} from 'react';
import ProductContext from '../context.jsx';


var RelatedListCard = ({product, photo, price}) => {
  const context = useContext(ProductContext);

  // console.log('related list card product: ', product);


  const handleProductChange = (e) => {
    // console.log(product.id);
    context.updateCurrentProduct(product.id)
  };

  const handleProductCompare = (e) => {
    var modal = document.getElementById('comparison-modal');
    modal.style.display = "block";

  }

  const handleModalClose = (e) => {
    var modal = document.getElementById('comparison-modal');
    modal.style.display = "none";
  }



  return (
    <div className='related-list-card'>
      <span class="fa fa-star checked" onClick={handleProductCompare}></span>
      <img className='related-list-card-img' src={photo}/>
      <div className='related-card-category'>{product.category}</div>
      <div className='related-card-name' onClick={handleProductChange}>{product.name}</div>
      <div className='related-card-price'>{`$${price}`}</div>
      <div className='related-card-div'>Star Rating</div>
      <div id='comparison-modal' class='comparison-modal'>
        <div class="modal-content">
        <span id='close-modal' class='close' onClick={handleModalClose}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>

</div>
    </div>
  )
}

export default RelatedListCard;