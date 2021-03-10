import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';
import Modal from 'react-modal';


let ReviewModal = (props) => {
  const context = useContext(ProductContext);

  const [starIsClicked, setStar] = useState(false);




  return (
    <Modal isOpen={props.open} onRequestClose={props.closeForm} ariaHideApp={false}>
      <h1>Write Your Review</h1>
      <h3>About the [Product Name (change later)]</h3>
      <div>Star Component</div>
      <button onClick={props.closeForm}>Close</button>
      <form>
        <fieldset>
          <label>Do you recommend this product?      </label>
          <label>Yes</label>
          <input type='radio' value='Yes' name='recommend'></input>
          <label>No</label>
          <input type='radio' value='No' name='recommend'></input>
        </fieldset>
        <fieldset>
          <label>Rate the size </label>
          <label>Too small</label>
          <input type='radio' value='1' name='Size'></input>
          <label>Half a size too small</label>
          <input type='radio' value='2' name='Size'></input>
          <label>Perfect</label>
          <input type='radio' value='3' name='Size'></input>
          <label>Half size too big</label>
          <input type='radio' value='4' name='Size'></input>
          <label>A size too wide</label>
          <input type='radio' value='5' name='Size'></input>
        </fieldset>
      </form>
    </Modal>
  )



}


export default ReviewModal;