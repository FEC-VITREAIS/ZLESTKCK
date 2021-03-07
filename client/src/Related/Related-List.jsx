import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContext from '../context.jsx';
import RelatedListCard from './Related-List-Card.jsx';

var RelatedList = () => {
  const context = useContext(ProductContext);

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true
  })


  return (
    <div className='img-carousel'>
      <h2> Multiple items </h2>
      <Slider {...sliderSettings}>
        {context.relatedProducts.map((p) => {
          return (
            <div>
              <RelatedListCard product={p} photo={''} key={p.id}  photo={p.styles.photo} price={p.styles.price}/>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default RelatedList;
