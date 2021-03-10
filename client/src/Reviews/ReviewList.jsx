import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';
import ReviewListTile from './ReviewListTile.jsx';

let ReviewList = (props) => {
  const context = useContext(ProductContext);

  const [reviews, setReviews] = useState([]);
  const [numReviews, setnumReviews] = useState(2);

  //console.log(props);
  //console.log(props.reviews[0]);

  useEffect(() => {
    const reviews = context.productReviews;
    setReviews(reviews);
    setnumReviews(2);
  }, [context.productReviews])

  const HandleClick = (e) => {
    setnumReviews(numReviews+2)
  }

  const HandleReviewClick = (e) => {
    props.setShowReviewForm(!props.showReview);
  }

  if (reviews) {
    return (
      <div className='ReviewList'>
        {numReviews < reviews.length && <div>Reviews 1-{numReviews} of {reviews.length}</div>
        }
        {numReviews >= reviews.length && <div>Reviews 1-{reviews.length} of {reviews.length}</div>}
        <div>Sort By:</div>
        {/* <ReviewListTile review={props.reviews[0]}/> */}
        {reviews.slice(0, numReviews).map((review) => <ReviewListTile className='ReviewListTile' review={review} id={review.id}/>)}
        {numReviews < reviews.length && <button onClick={HandleClick}>More Reviews</button>}
        <button className='addReview' onClick={HandleReviewClick}>Write Review</button>
      </div>
    )

//comment here

  } else {
    return (
      <div>Loading ReviewsList...</div>
    )
  }










}


export default ReviewList;