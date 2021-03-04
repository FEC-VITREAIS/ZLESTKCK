import React from 'react'

let AnswerEntries = (props) => {
  return (
    <>
    <div className="QAaentries">
      <span className="QAaentries_answer">A:</span>
      <span className="QAaentries_meta">From: Questioner Display Name</span>
      <span className="QAaentries_meta">Date and time of question</span>
      <span className="QAaentries_meta">Mark as Helpful (50)</span>
      <span className="QAaentries_meta">Report</span>
    </div>
      <div className="QAaentries_answerBody"> This is the answer</div>
    </>
  )
}

export default AnswerEntries