import React, { useState, useEffect } from "react";

let SelectStyle = ({ styles, changeView }) => {
  if (styles.length === undefined || styles.length === 0) {
    return <div> place holder for when products api called </div>;
  }

  let slider = [];

  return (
    <>
      <div className="SelectStyleContainer">
        {styles.map((product, index) => {
          const { photos } = product;

          const { thumbnail_url } = photos[0];

          return (
            <img
              key={index}
              style={{ height: "100px", width: "100px" }}
              src={thumbnail_url}
              onClick={(e) => {
                changeView(e, product);
              }}
              className="styleWidgetimgs"
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default SelectStyle;
