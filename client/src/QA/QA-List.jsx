import React from 'react'
import QuestionEntries from './QA-QuestionEntries.jsx'

let QAList = function(props) {

  return (
    <div className="QAlist">
      <div className="QAlist_displayCount">Questions 1-4 of 10</div>
      <input className="QAlist_askButton" type="button" value="Ask a question"></input>
      <input className="QAlist_sortButton" type="button" value="Sort by"></input>
      <div className="QAlist_container">
        <QuestionEntries />
        <QuestionEntries />
        <QuestionEntries />
        <QuestionEntries />
      </div>
      <button className="QAlist_loadMoreQuestions">Load more questions</button>
    </div>
  )
}

export default QAList