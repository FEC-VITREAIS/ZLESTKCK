import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';
import Modal from 'react-modal';
import StarRatings from 'react-star-ratings';


let ReviewModal = (props) => {
  const context = useContext(ProductContext);

  const [starRating, setStarRating] = useState(0);
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [RatingText, setRatingText] = useState('');
  const [Recommend, setRecommend] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [isWidth, setIsWidth] = useState(false);
  const [isComfort, setIsComfort] = useState(false);
  const [isQuality, setIsQuality] = useState(false);
  const [isLength, setIsLength] = useState(false);
  const [isFit, setIsFit] = useState(false);
  const [bodyCount, setBodyCount] = useState(0);
  const [sumCount, setSumCount] = useState(0);
  const [NameCount, setNameCount] = useState(0);
  const [EmailCount, setEmailCount] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [failedSubmit, setFailedSubmit] = useState(false);

  const resetState = () => {
    setStarRating(0);
    setIsStarClicked(false);
    setRatingText('');
    setRecommend(false);
    setIsSize(false);
    setIsWidth(false);
    setIsComfort(false);
    setIsQuality(false);
    setIsLength(false);
    setIsFit(false);
    setBodyCount(0);
    setSumCount(0);
    setNameCount(0);
    setEmailCount(0);
    setHasSubmitted(false);
    setFailedSubmit(false);

  }

  const onCharClick = (e) => {
    if (e.target.name === 'Size') {
      setIsSize(true);
    }
    if (e.target.name === 'Width') {
      setIsWidth(true);
    }
    if (e.target.name === 'Comfort') {
      setIsComfort(true);
    }
    if (e.target.name === 'Quality') {
      setIsQuality(true);
    }
    if (e.target.name === 'Length') {
      setIsLength(true);
    }
    if (e.target.name === 'Fit') {
      setIsFit(true);
    }
  }

  const onStarPress = (rating) => {
    setStarRating(rating);
    setIsStarClicked(true);
    if (rating === 1) {
      setRatingText('Poor')
    }
    if (rating === 2) {
      setRatingText('Fair')
    }
    if (rating === 3) {
      setRatingText('Average')
    }
    if (rating === 4) {
      setRatingText('Good')
    }
    if (rating === 5) {
      setRatingText('Great')
    }
  }

  const RecommendClick = (e) => {
    setRecommend(true);
  }

  const HandleChange = (e) => {
    const chars = e.target.value.length;
    setBodyCount(chars);
  }

  const HandleSummary = (e) => {
    const chars = e.target.value.length;
    setSumCount(chars);
  }

  const handleName = (e) => {
    const chars = e.target.value.length;
    setNameCount(chars);
  }

  const handleEmail = (e) => {
    const chars = e.target.value.length;
    setEmailCount(chars);
  }

  const checkSubmit = (e) => {
    const numberOfCharach = Object.keys(context.productReviewsMetaData.characteristics).length;

    let displayedCharach = 0;
    if (isSize) {displayedCharach += 1};
    if (isWidth) {displayedCharach += 1};
    if (isComfort) {displayedCharach += 1};
    if (isQuality) {displayedCharach += 1};
    if (isLength) {displayedCharach += 1};
    if (isFit) {displayedCharach += 1};

    const allCharachs = numberOfCharach === displayedCharach;

    if ((starRating > 0) && (Recommend) && (allCharachs) && (bodyCount >= 50) && (sumCount > 0) && (NameCount > 0) && (EmailCount > 0)) {
      submitReview();
    } else {
      errorReview()
    }

  }

  const submitReview = () => {
    setHasSubmitted(true);
    setFailedSubmit(false);
  }

  const errorReview = () => {
    setFailedSubmit(true);
  }

  useEffect(() => {
    resetState();
  }, [context.productReviewsMetaData])




  if (context.productReviewsMetaData.characteristics && !hasSubmitted) {
    return (
      <Modal isOpen={props.open} onRequestClose={props.closeForm} ariaHideApp={false}>


        <div className='RevModalContainer'>

          <h1 className='RevModalTitle'>Write Your Review</h1>
          <h3 className='RevModalSub'>About the {context.productName}</h3>


          <div className='RevModalStar'>
            <StarRatings rating={starRating} starRatedColor='#F4ABAB' changeRating={onStarPress} numberOfStars={5} rame='starRating' />
            {isStarClicked && <label>{RatingText}</label>}
          </div>


          <form>
            <fieldset>
              <label>Do you recommend this product?      </label>
              <label>Yes</label>
              <input type='radio' value='Yes' name='recommend' onClick={RecommendClick}></input>
              <label>No</label>
              <input type='radio' value='No' name='recommend' onClick={RecommendClick}></input>
            </fieldset>

            <fieldset>

              {context.productReviewsMetaData.characteristics.Size && <div className='ModalFormSize'>
                <label>Rate the size </label>
                <label>Too small</label>
                <input type='radio' value='1' name='Size' onClick={onCharClick}></input>
                <label>Half a size too small</label>
                <input type='radio' value='2' name='Size' onClick={onCharClick}></input>
                <label>Perfect</label>
                <input type='radio' value='3' name='Size' onClick={onCharClick}></input>
                <label>Half size too big</label>
                <input type='radio' value='4' name='Size' onClick={onCharClick}></input>
                <label>A size too wide</label>
                <input type='radio' value='5' name='Size' onClick={onCharClick}></input>
              </div>}
              <br></br>

              {context.productReviewsMetaData.characteristics.Width && <div className='ModalFormWidth'>
                <label>Rate the Width </label>
                <label>Too narrow</label>
                <input type='radio' value='1' name='Width' onClick={onCharClick}></input>
                <label>Slightly narrow</label>
                <input type='radio' value='2' name='Width' onClick={onCharClick}></input>
                <label>Perfect</label>
                <input type='radio' value='3' name='Width' onClick={onCharClick}></input>
                <label>Slightly wide</label>
                <input type='radio' value='4' name='Width' onClick={onCharClick}></input>
                <label>Too wide</label>
                <input type='radio' value='5' name='Width' onClick={onCharClick}></input>
              </div>}
              <br></br>

              {context.productReviewsMetaData.characteristics.Comfort && <div className='ModalFormComfort'>
                <label>Rate the Comfort </label>
                <label>Uncomfortable</label>
                <input type='radio' value='1' name='Comfort' onClick={onCharClick}></input>
                <label>Slightly uncomfortable</label>
                <input type='radio' value='2' name='Comfort' onClick={onCharClick}></input>
                <label>Ok</label>
                <input type='radio' value='3' name='Comfort' onClick={onCharClick}></input>
                <label>Comfortable</label>
                <input type='radio' value='4' name='Comfort' onClick={onCharClick}></input>
                <label>Perfect</label>
                <input type='radio' value='5' name='Comfort' onClick={onCharClick}></input>
              </div>}
              <br></br>

              {context.productReviewsMetaData.characteristics.Quality && <div className='ModalFormQuality'>
                <label>Rate the Quality </label>
                <label>Poor</label>
                <input type='radio' value='1' name='Quality' onClick={onCharClick}></input>
                <label>Below average</label>
                <input type='radio' value='2' name='Quality' onClick={onCharClick}></input>
                <label>What I expected</label>
                <input type='radio' value='3' name='Quality' onClick={onCharClick}></input>
                <label>Pretty great</label>
                <input type='radio' value='4' name='Quality' onClick={onCharClick}></input>
                <label>Perfect</label>
                <input type='radio' value='5' name='Quality' onClick={onCharClick}></input>
              </div>}
              <br></br>

              {context.productReviewsMetaData.characteristics.Length && <div className='ModalFormLength'>
                <label>Rate the Length </label>
                <label>Runs Short</label>
                <input type='radio' value='1' name='Length' onClick={onCharClick}></input>
                <label>Runs slightly short</label>
                <input type='radio' value='2' name='Length' onClick={onCharClick}></input>
                <label>Perfect</label>
                <input type='radio' value='3' name='Length' onClick={onCharClick}></input>
                <label>Runs slightly long</label>
                <input type='radio' value='4' name='Length' onClick={onCharClick}></input>
                <label>Runs long</label>
                <input type='radio' value='5' name='Length' onClick={onCharClick}></input>
              </div>}
              <br></br>

              {context.productReviewsMetaData.characteristics.Fit && <div className='ModalFormFit'>
                <label>Rate the Fit </label>
                <label>Runs tight</label>
                <input type='radio' value='1' name='Fit' onClick={onCharClick}></input>
                <label>Runs slightly tight</label>
                <input type='radio' value='2' name='Fit' onClick={onCharClick}></input>
                <label>Perfect</label>
                <input type='radio' value='3' name='Fit' onClick={onCharClick}></input>
                <label>Runs slightly long</label>
                <input type='radio' value='4' name='Fit' onClick={onCharClick}></input>
                <label>Runs long</label>
                <input type='radio' value='5' name='Fit' onClick={onCharClick}></input>
              </div>}

            </fieldset>

            <fieldset>
              <div className='RevModalReviewSum'>
                <label>Please enter a review summary: {'\t'}</label>
                <input type='text' maxlength={60} placeholder={'Example: Best purchase ever!'} size={50} onChange={HandleSummary}></input>
              </div>
            </fieldset>

            <fieldset>
              <div className='ReviewModalBody'>
                <label>Please leave your review: </label>
                <textarea type='text' maxLength={1000} placeholder={'Why did you like the product or not?'} size={100} style={{height: '100px'}} onChange={HandleChange}></textarea>
                //!Come back and fix this
                {bodyCount < 50 && <div>Minimum required characters left: {50-bodyCount}</div>}
                {bodyCount >=50 && <div>Minimum Reached</div>}
              </div>
            </fieldset>

            <fieldset>
              <div className='ReviewModalNickname'>
                <label>Please enter your display name: </label>
                <input type='text' maxlength={60} size={60} placeholder={'Example: jackson11!'} onChange={handleName}></input>
                <div>For privacy reasons, do not use your full name or email address</div>
              </div>
            </fieldset>

            <fieldset>
              <div className='ReviewModalEmail'>
                <label>Please enter your email: </label>
                <input type='text' size={60} maxlength={60} placeholder={'Example: jackson11@gmail.com'} onChange={handleEmail}></input>
                <div>For authentication reasons, you will not be emailed</div>
              </div>
            </fieldset>

          </form>

          <button onClick={checkSubmit}>Submit Review</button>


          <button onClick={props.closeForm}>Close</button>

          {failedSubmit && <label className='FailedSubmit'>{'\t'}Make Sure all fields are filled out</label>}

        </div>
      </Modal>
    )
  } else if (hasSubmitted) {
    return (
      <Modal isOpen={props.open} onRequestClose={props.closeForm} ariaHideApp={false}>
        <h1 className='ModalRevSuccess'>Your review is being processed</h1>
        <button onClick={props.closeForm}>Close</button>
      </Modal>
    )
  } else {
    return <div>Not here</div>
  }



}


export default ReviewModal;