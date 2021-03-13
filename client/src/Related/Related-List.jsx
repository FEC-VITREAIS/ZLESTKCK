import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContext from '../context.jsx';
import RelatedProductContext from './context/related-context.js';
import RelatedListCard from './Related-List-Card.jsx';

var RelatedList = (props) => {
  const context = useContext(ProductContext);
  const relatedContext = useContext(RelatedProductContext);


  //settings for React-Slick Image Carousel
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
  }

  return (
    <div className='img-carousel'>
      <h1 className='related-items-title'> Related Items </h1>
      <Slider {...sliderSettings}>
        {relatedContext.relatedProducts.map((p) => {
          return (
            <div className='slick-div'>
              <RelatedListCard
              product={p}
              key={p.id} />
            </div>
          )
        })}
      </Slider>
    </div>
  );
}


export default RelatedList;
