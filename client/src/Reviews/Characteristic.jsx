import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';

let Characteristic = (props) => {

  // console.log('CHARACTERISTIC PROPS: ', props);

  if (props.charach) {
    return (
      <div className='CharacterComponent'>

        {/* {<div>{props.charach}</div>} */}


        {(props.charach === 'Size') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <label>Too Small</label>
            <label>Perfect</label>
            <label>Too Big</label>
          </div>}


        {(props.charach === 'Width') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <label>Too narrow</label>
            <label>Perfect</label>
            <label>Too wide</label>
          </div>}

        {(props.charach === 'Comfort') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <label>Uncomfortable</label>
            <label>Perfect</label>
          </div>}

        {(props.charach === 'Quality') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <label>Poor</label>
            <label>Perfect</label>
          </div>

        }


        {(props.charach === 'Length') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <label>Runs Short</label>
            <label>Perfect</label>
            <label>Runs Long</label>
          </div>}

        {(props.charach === 'Fit') &&
          <div>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <label>Runs tight</label>
            <label>Perfect</label>
            <label>Runs long</label>
          </div>}







      </div>


    )
  } else {
    return <div>Loading characteristic...</div>
  }

}

export default Characteristic;