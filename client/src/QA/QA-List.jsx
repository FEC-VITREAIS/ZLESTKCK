import React from 'react'
import QuestionEntries from './QA-QuestionEntries.jsx'

let QAList = function(props) {

  return (
    <div>
      <div>Questions 1-4 of 10</div>
      <input type="button" value="Ask a question"></input>
      <input type="button" value="Sort by"></input>
      <div className="QAList">
        <QuestionEntries />
        <QuestionEntries />
        <QuestionEntries />
        <QuestionEntries />
      </div>
      <button>Load more questions</button>
    </div>
  )
}

export default QAList