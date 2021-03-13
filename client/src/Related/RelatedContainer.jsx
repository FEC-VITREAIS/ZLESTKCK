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

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [displayModal, setDisplayModal] = useState(false); //determines if modal window is active
  const [sharedFeatures, setSharedFeatures] = useState({}); //comparison object between related product and current product
  const [modalProduct, setModalProduct] = useState({}); //ensures that the specific related product clicked on will return back to the related container state (to pass to the modal window as it's product).

  
  //updates displayModal in local state to false thus closing the modal window
  //updates sharedFeatures in localState to an empty object 
  //ensuring that any new comparison will only contain the newest two items being compared
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
        setModalProduct,
        handleModalClose,
      }}>
        <>
        <ReactModal
          isOpen={displayModal}
          onRequestClose={handleModalClose}
          shouldCloseOnEsc={true}>
            <RelatedModalWindow/>
        </ReactModal>

          <div className='related-container'>
            <RelatedList />
            <YourOutfitsList />
          </div>
        </>
      </RelatedProductContext.Provider>
    )
  } else {
    return (
      <div className='related-container'></div>
    )
  }
}


export default RelatedContainer