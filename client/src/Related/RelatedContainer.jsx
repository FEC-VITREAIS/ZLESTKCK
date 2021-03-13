import React, {useContext, useState, useEffect} from 'react';
import RelatedList from './Related-List.jsx';
import YourOutfitsList from './Your-Outfits-List.jsx';
import RelatedModalWindow from './Related-Modal-Window.jsx';
import ProductContext from '../context.jsx';
import RelatedProductContext from './context/related-context.js';
import ReactModal from 'react-modal';
import fetchRelatedProducts from '../FetchData/fetchRelatedProducts.js';


let RelatedContainer = function(props) {
  const context = useContext(ProductContext);

  /**
   * Local State for main container of related items
   *
   * displayModal
   * @type {bool} represents whether the modal window for related items should appear
   *
   * sharedFeatures
   * @type {object} contains an array-like structure where the key is a feature name and the value is another object containing the value of that feature for each product being compared
   *
   * modalProduct
   * @type {object} an empty state object that is passed to the modal window to ensure that the specific related product clicked on will return back to the related container state (which currently has no knowledge of that product)
   */

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [sharedFeatures, setSharedFeatures] = useState({});
  const [modalProduct, setModalProduct] = useState({});

  /**
   * handleModalClose
   *
   * @param -none
   * @return {undefined}
   *
   * updates displayModal in local state to false thus closing the modal window
   * updates sharedFeatures in localState to an empty object ensuring that any new comparison will only contain the newest two items being compared
   *
   */
  const handleModalClose = (e) => {
    setDisplayModal(false);
    setSharedFeatures({});
  }

  // useEffect(()=>{}, [sharedFeatures])
  useEffect(()=> {
    fetchRelatedProducts(context.currentProduct)
    .then((data) => {
      console.warn('DATA DETECTED: ', data);
      setRelatedProducts(data);
    })
  }, [context.currentProduct]);

  if (relatedProducts.length) {
    return (
      <RelatedProductContext.Provider value={{
        relatedProducts,
        setRelatedProducts,
        displayModal,
        setDisplayModal,
        sharedFeatures,
        setSharedFeatures,
        modalProduct,
        setModalProduct
      }}>
        <div className='related-container'>
          <RelatedList />
          <YourOutfitsList />
        </div>
      </RelatedProductContext.Provider>
    )
  } else {
    return (
      <></>
    )
  }

//   if (context.relatedProducts && context.relatedProducts.length) {
//     return (
//       <>
//       <ReactModal
//         isOpen={displayModal}
//         onRequestClose={handleModalClose}
//         shouldCloseOnEsc={true}>
//            <RelatedModalWindow
//            handleModalClose={handleModalClose}
//            product={modalProduct}
//            sharedFeatures={sharedFeatures}
//           />
//       </ReactModal>

        // <div className='related-container'>
        //   <RelatedList
        //   setSharedFeatures={setSharedFeatures}
        //   setModalProduct={setModalProduct}
        //   setDisplayModal={setDisplayModal}/>
        //   <YourOutfitsList />
        // </div>
//       </>
//     )
//   } else {
//     return (
//       <div className='related-container'></div>
//     )
//   }
}


export default RelatedContainer