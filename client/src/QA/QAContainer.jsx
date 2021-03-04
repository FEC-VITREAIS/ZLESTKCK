import React from 'react'
import QAstyles from './styles/QAstyles.css'

import ProductContext from '../context.jsx'

import QASearch from './QA-Search.jsx'
import QAList from './QA-List.jsx'
import QAModal from './QA-AnswerModal'

let QAContainer = function(props) {

  let context = React.useContext(ProductContext)

  return (
    <div className="container">
      <h2>Customer Questions</h2>
      <h4>Ask for information about this product from the customers who own it.</h4>
      <QASearch />
      <QAList />
      <QAModal />
    </div>
  )
}

export default QAContainer