import React from 'react'
import QAstyles from './styles/QAstyles.css'

import ProductContext from '../context.jsx'

import QASearch from './QA-Search.jsx'
import QAList from './QA-List.jsx'

// import AModal from './QA-AnswerModal'
// import QModal from './QA-QuestionModal'

let QAContainer = function(props) {

  let context = React.useContext(ProductContext)

  return (
    <div className="container">
      <h2>Customer Questions</h2>
      <h4>Ask for information about this product from the customers who own it.</h4>
      <QASearch />
      <QAList />
      {/* <QModal />
      <AModal /> */}
    </div>
  )
}

export default QAContainer