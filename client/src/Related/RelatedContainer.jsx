import React, { useContext, useState, useEffect } from "react";
// import './styles/styles.css';
import RelatedList from "./Related-List.jsx";
import YourOutfitsList from "./Your-Outfits-List.jsx";
import ProductContext from "../context.jsx";
import RelatedModalWindow from "./Related-Modal-Window.jsx";

let RelatedContainer = function (props) {
  const context = useContext(ProductContext);

  const [displayModal, setDisplayModal] = useState(false);
  const [sharedFeatures, setSharedFeatures] = useState({});
  const [modalProduct, setModalProduct] = useState({});

  const displayModalWindow = (bool) => {
    if (bool) {
      return (
        <RelatedModalWindow
          handleModalClose={handleModalClose}
          product={modalProduct}
          sharedFeatures={sharedFeatures}
        />
      );
    } else {
      return <></>;
    }
  };

  const handleModalClose = (e) => {
    setDisplayModal(false);
    setSharedFeatures({});
  };

  useEffect(() => {}, [sharedFeatures]);

  if (context.relatedProducts && context.relatedProducts.length) {
    return (
      <div className="RelatedContainer">
        <div className="related-modal">
          {displayModalWindow(displayModal)}
          <div className="Related-Container">
            <RelatedList
              setSharedFeatures={setSharedFeatures}
              setModalProduct={setModalProduct}
              setDisplayModal={setDisplayModal}
            />
            <YourOutfitsList />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="RelatedContainer"></div>;
  }

  //only renders when related style data is recieved by API
  // if (context.relatedProducts && context.relatedProducts.length) {
  //   return (
  //     <div className='related-container'>
  //       <RelatedList />
  //       <YourOutfitsList />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className='related-container'></div>
  //   )
  // }
};

export default RelatedContainer;
