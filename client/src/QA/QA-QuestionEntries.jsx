import React from 'react'
import AnswerEntries from './QA-AnswerEntries'

let QuestionEntries = function(props) {
  return (
    <div>
      <span>From: Questioner Display Name</span>
      <span>Date and time of question</span>
      <span>Mark as Helpful (100)</span>
      <span>Report</span>
      <div>
        Q: What is Question #1?
      </div>
      <button type="button">Add an answer</button>
      <AnswerEntries />
      <AnswerEntries />
      <div>
        <span>Answers 1-2 of 3</span>
        <button type="button">Load more answers</button>
      </div>
      <div>
        <span>Answers 1-3</span>
        <button type="button">Collapse answers</button>
      </div>
    </div>
  )
}

export default QuestionEntries