import React from 'react'
import ReactDOM from "react-dom"

import ProductContainer from './Product/ProductContainer.jsx'
import QAContainer from './QA/QAContainer.jsx'
import RelatedContainer from './Related/RelatedContainer.jsx'
import ReviewContainer from './Reviews/ReviewContainer.jsx'


let App = function(props) {
  return (
    <div>
      <ProductContainer />
      <RelatedContainer />
      <QAContainer />
      <ReviewContainer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);