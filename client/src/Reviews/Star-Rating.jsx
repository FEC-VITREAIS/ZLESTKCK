import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

var StarRating = ({rating}) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      numberOfStars={5}
      name='rating'
    />
  )
};

// class component as described in star rating docs  - https://www.npmjs.com/package/react-star-ratings
// class StarRating extends Component {
//   changeRating( newRating, name ) {
//     this.setState({
//       rating: newRating
//     });
//   }

//   render() {
//     // rating = 2;
//     return (
//       <StarRatings
//         rating={2}
//         starRatedColor="blue"
//         changeRating={this.changeRating}
//         numberOfStars={5}
//         name='rating'
//       />
//     );
//   }
// }


export default StarRating;