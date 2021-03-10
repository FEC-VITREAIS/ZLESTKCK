import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';

let Characteristic = (props) => {

  // console.log('CHARACTERISTIC PROPS: ', props);

  if (props.charach) {
    return (
      <div className='CharacterComponent'>

        {/* {<div>{props.charach}</div>} */}


        {(props.charach === 'Size') && <div></div>}


        {(props.charach === 'Width') && <div></div>}

        {(props.charach === 'Comfort') && <div></div>}

        {(props.charach === 'Quality') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '9', height: '15px', width: `${props.value/5*100}%`, backgroundColor: 'blue'}}></div>
            </div>
          </div>

        }


        {(props.charach === 'Length') && <div></div>}

        {(props.charach === 'Fit') && <div></div>}







      </div>


    )
  } else {
    return <div>Loading characteristic...</div>
  }

}

export default Characteristic;