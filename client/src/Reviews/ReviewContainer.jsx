import React, {useContext, useEffect, useState} from 'react'
// import './styles/ReviewStyles.css';
import ReviewList from './ReviewList.jsx';
import ProductContext from '../context.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewModal from './ReviewModal'
//Import Breakdown and SubmitForm and Sort
import StarRating from './Star-Rating.jsx';





let ReviewContainer = function(props) {
  const context = useContext(ProductContext);

  //const [Reviews, setReviews] = useState([]);
  const [ReviewMeta, setReviewMeta] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);
  // console.log('METADATA: ', context.productReviewsMetaData);

  useEffect(() => {
    //const reviews = context.productReviews;
    const reviewMeta = context.productReviewsMetaData;
    //console.log("The reviews are here: ", reviews)
    //setReviews(reviews);
    setReviewMeta(reviewMeta)
  }, [context.productReviewsMetaData]);

  const closeForm = () => {
    setShowReviewForm(!showReviewForm);
  }

  // console.log('METADATA: ', context.productReviewsMetaData);
  // console.log('Check if true: ', context.productReviewsMetaData.characteristics)

  return (

    <div className='review-container'>
      <h3>RATINGS & REVIEWS</h3>
      <ReviewList setShowReviewForm={setShowReviewForm} showReview={showReviewForm} currentSort={props.reviewsSortBy}/>
      {ReviewMeta && ReviewMeta.ratings && <ReviewBreakdown data={ReviewMeta}/> }
      <ReviewModal open={showReviewForm} closeForm={closeForm}/>
    </div>

  )
}

export default ReviewContainer


