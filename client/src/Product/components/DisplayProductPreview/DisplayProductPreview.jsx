import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

let DisplayProductPreview = ({ styles, changeView, currentProduct }) => {
  // console.log(styles)

  if (styles.length === undefined || styles.length === 0) {
    return <div> place holder for when products api called </div>;
  }

  let { thumbnail_url } = currentProduct.photos[0];

  let slides = [];

  styles.map((product, index) => { // note - this can be transformed into a helper func its repetitive
    const { photos } = product;

    const { thumbnail_url } = photos[0];

    slides.push(
      <img
        style={{ height: "150px", width: "150px" }}
        src={thumbnail_url}
        onClick={(e) => {
          changeView(e, product);
        }}
      ></img>
    );
  })

  return (
    <>
      <div className="DisplayCurrentProductContainer">
        <div className="mainSlider">
          <Swiper> 
            {slides}
          </Swiper>
        </div>
      </div>

      <div className="DisplayProductPreviewContainer">
        {styles.map((product, index) => {
          const { photos } = product;

          const { thumbnail_url } = photos[0];

          return (
            <img
              style={{ height: "150px", width: "150px" }}
              src={thumbnail_url}
              onClick={(e) => {
                changeView(e, product);
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default DisplayProductPreview;
