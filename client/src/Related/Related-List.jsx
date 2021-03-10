import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContext from '../context.jsx';
import RelatedListCard from './Related-List-Card.jsx';

var RelatedList = ({setSharedFeatures, setModalProduct, setDisplayModal}) => {
  const context = useContext(ProductContext);


  const [sliderSettings, setSliderSettings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    // arrows: true,
    accessibility: true,
  })


  return (
    <div className='img-carousel'>
      <h2 className='related-items-title'> Related Items </h2>
      <Slider {...sliderSettings}>
        {context.relatedProducts.map((p) => {
          return (
            <div className='slick-div'>
              <RelatedListCard product={p} key={p.id} setSharedFeatures={setSharedFeatures} setModalProduct={setModalProduct} setDisplayModal={setDisplayModal}/>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}


export default RelatedList;
