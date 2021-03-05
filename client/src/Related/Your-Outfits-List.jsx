import React, {useState} from 'react';


var YourOutfitsList = () => {
  const [outfitsList, setOutfitsList] = useState([]);

  console.log('outfits list: ', outfitsList)
  return (
    <React.Fragment>
    <div> Your outfits: </div>
    </React.Fragment>
  )

}

export default YourOutfitsList;