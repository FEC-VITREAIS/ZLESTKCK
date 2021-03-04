import React from 'react'
import AnswerEntries from './QA-AnswerEntries'

let QuestionEntries = function(props) {
  return (
    <>
    <div className="QAqentries">
      <span className="QAqentries_question">Q:</span>
      <span className="QAqentries_meta">From: Questioner Display Name</span>
      <span className="QAqentries_meta">Date and time of question</span>
      <span className="QAqentries_meta">Mark as Helpful (100)</span>
      <span className="QAqentries_meta">Report</span>
    </div>

    <div className="QAqentries_questionBody">What is Question #1?
      <button className="QAqentries_addButton" type="button">Add an answer</button>
      <AnswerEntries />
      <AnswerEntries />
    </div>

    <div className="QAqentries_loadMore">
      <span className="QAqentries_displayCount">Answers 1-2 of 3</span>
      <button className="QAqentries_loadButton" type="button">Load more answers</button>
    </div>

    <div className="QAqentries_collapse">
      <span className="QAqentries_displayCount">Answers 1-3</span>
      <button className="QAqentries_collapseButton" type="button">Collapse answers</button>
    </div>
    </>
  )
}

export default QuestionEntries