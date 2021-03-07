import React, {useState, useContext, useEffect} from 'react';
import ProductContext from '../context.jsx';
import OutfitsCard from './Outfits-Card.jsx';


var YourOutfitsList = () => {
  const [outfitsList, setOutfitsList] = useState([]);
  const [outfitsListCache, setOutfitsListCache] = useState({});
  const context = useContext(ProductContext);

  const currentProduct = context.currentProductDetails;
  const currentProductStyles = context.productStyles;

  currentProduct.styles = {
    photo: currentProductStyles[0].photos[0].thumbnail_url,
    price: currentProductStyles[0].original_price,
    salePrice: currentProductStyles[0].sale_price,
  }

  const addNewOutfit = (e) => {
    // e.preventDefault();
    // console.log('adding new outfit');


    //add new product id to cache
    const newOutfitCache = Object.assign({}, outfitsListCache);
    newOutfitCache[currentProduct.id] = true;
    setOutfitsListCache(newOutfitCache);

    //only display outfit if product id not in cache
    if (!outfitsListCache[currentProduct.id]) {
      setOutfitsList([...outfitsList, currentProduct])
    }

  };


  console.warn('outfit list: ', outfitsList);

  const removeOutfit = (product) => {

    //switch the cache for product id to false so it will display on click
    const newOutfitCache = Object.assign({}, outfitsListCache);
    newOutfitCache[product.id] = false;
    setOutfitsListCache(newOutfitCache);

    //find the matching product id and remove it
    const updatedOutfitList = outfitsList.filter((o) => {
      return (
        o.id !== product.id
      )
    });

    setOutfitsList(updatedOutfitList);
  }

  return (
    <>
      <h2>Your outfits: </h2>
      <div className='outfits-list'>
        <div className='related-list-card'>
          Add New Outfit<br></br>
          <span className="fa fa-plus" onClick={addNewOutfit}></span><br></br>
        </div>
        {/* {renderOutfits(outfitsList)} */}
        {outfitsList.map((outfit) => {
          return (<OutfitsCard key={outfit.id} product={outfit} removeOutfit={removeOutfit} />)
        })}
      </div>
    </>
  )

}

export default YourOutfitsList;