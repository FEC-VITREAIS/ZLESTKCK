import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

var StarRating = ({ratingsList, className, dimension}) => {

  //ratings list will be an object that looks like this: {2: '2', 5: '1'}
  //the keys represent the reviewer id and the value represents the rating

  var calculateAverageRating = () => {
    var total = 0;
    var allRatings = Object.values(ratingsList);

    allRatings.forEach((rating) => {
      total += Number(rating);
    })

    var average = (total / allRatings.length);
    return average
  }

  return (
    <StarRatings
      rating={calculateAverageRating(ratingsList) || 0}
      starRatedColor="#735050"
      numberOfStars={5}
      starDimension={dimension}
      name={className}
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