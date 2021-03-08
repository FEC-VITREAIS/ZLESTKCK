import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);

let DisplayProductPreview = ({ styles, changeView, currentProduct }) => {
  // console.log(styles)

  if (styles.length === undefined || styles.length === 0) {
    return <div> place holder for when products api called </div>;
  }

  let { thumbnail_url } = currentProduct.photos[0];

  let slides = [];

  styles.map((product, index) => {
    // note - this can be transformed into a helper func its repetitive
    const { photos } = product;

    const { thumbnail_url } = photos[0];

    slides.push(
      <SwiperSlide>
        <img
          style={{ height: "150px", width: "150px" }}
          src={thumbnail_url}
          onClick={(e) => {
            changeView(e, product);
          }}
        ></img>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="DisplayCurrentProductContainer">
        <div className="mainSlider">
          <Swiper
            onSlideChange={() => console.log("slide change")}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {slides}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
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
