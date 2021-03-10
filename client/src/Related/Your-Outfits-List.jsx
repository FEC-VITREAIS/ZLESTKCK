import React, {useState, useContext, useEffect} from 'react';
import ProductContext from '../context.jsx';
import OutfitsCard from './Outfits-Card.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var YourOutfitsList = () => {
  const [outfitsList, setOutfitsList] = useState([]);
  const [outfitsListCache, setOutfitsListCache] = useState({});
  const [currentProductDetails, setCurrentProductDetails] = useState({});
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

  useEffect(()=> {
    const currentProduct = context.currentProductDetails;
    const currentProductStyles = context.productStyles;
    const currentRatings = context.productReviewsMetaData.ratings;

    currentProduct.styles = {
      photo: currentProductStyles[0].photos[0].thumbnail_url,
      price: currentProductStyles[0].original_price,
      salePrice: currentProductStyles[0].sale_price,
    }

    currentProduct.ratings = currentRatings;
    setCurrentProductDetails(currentProduct);
  }, [outfitsListCache])


  const addNewOutfit = (e) => {
    // e.preventDefault();

    //add new product id to cache
    const newOutfitCache = Object.assign({}, outfitsListCache);
    newOutfitCache[currentProductDetails.id] = true;

    setOutfitsListCache(newOutfitCache);

    // console.log('adding new outfit:', currentProductDetails);

    //only display outfit if product id not in cache
    if (!outfitsListCache[currentProductDetails.id]) {
      setOutfitsList([...outfitsList, currentProductDetails])
    };

  };


  // console.warn('outfit list: ', outfitsList);

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
      <h2 className='outfits-list-title'>Your Outfits</h2>
      <div className='outfits-list'>
        <div className='outfits-list-card'>
          <h2>Add New Outfit</h2>
          <span className="fa fa-plus" onClick={addNewOutfit}></span><br></br>
        </div>
        <Slider {...sliderSettings}>
          {outfitsList.map((outfit) => {
            return (
              // <div className='slick-div'>
              <div className='slick-outfits'>
                {<OutfitsCard key={outfit.id} product={outfit} removeOutfit={removeOutfit} />}
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )

}

export default YourOutfitsList;