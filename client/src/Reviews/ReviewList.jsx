import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';
import ReviewListTile from './ReviewListTile.jsx';

let ReviewList = (props) => {
  const context = useContext(ProductContext);

  const [reviews, setReviews] = useState([]);
  const [numReviews, setnumReviews] = useState(2);
  const [sort, setSort] = useState('Relevant');

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
      <div className='ReviewListContainer'>

        <div className='ReviewListHeader'>
          <div className='numReviews'>{reviews.length} reviews, </div>

          <div className='RevListHeaderSort'>sorted by:</div>

          <select className='ReviewListSort'>
            <option value='Newest'>Newest</option>
            <option value='Helpful'>Helpful</option>
            <option value='Relevant'>Relevant</option>
          </select>

        </div>

        <div className='ReviewList'>
          {reviews.slice(0, numReviews).map((review) => <ReviewListTile className='ReviewListTile' review={review} id={review.id}/>)}
        </div>

        <div className='ReviewListFooter'>
          {numReviews < reviews.length && <button onClick={HandleClick}>More Reviews</button>}
          <button className='addReview' onClick={HandleReviewClick}>Write Review</button>
        </div>

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