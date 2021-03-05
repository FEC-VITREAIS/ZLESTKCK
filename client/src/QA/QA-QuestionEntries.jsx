import React, {useState} from 'react'
import ProductContext from '../context.jsx';
import QAstyles from './styles/QAstyles.css'
import AnswerEntries from './QA-AnswerEntries.jsx'
import AModal from './QA-AnswerModal.jsx'

let QuestionEntries = function({body, asker, date, helpfulCount, reported, answers, qCount}) {
  const QAqentriesContext = React.useContext(ProductContext);
  const [arrayOfAnswers, setArrayOfAnswers] = useState(answers)

  return (
    <>
    <div className="QAqentries">
      <span className="QAqentries_question">Q:</span>
      <span className="QAqentries_meta">From: {asker}</span>
      <span className="QAqentries_meta">{date}</span>
      <span className="QAqentries_meta">Mark as Helpful ({helpfulCount})</span>
      <span className="QAqentries_meta">Report</span>
    </div>

    <div className="QAqentries_questionBody">{body}
      <button className="QAqentries_addButton" type="button">Add an answer</button>
      {arrayOfAnswers.map((answer) => {
        return (<AnswerEntries
        responder={answer.answerer_name}
        body={answer.body}
        date={answer.date}
        helpfulCount={answer.helpfulness}
        images={answer.photos}
        aCount={arrayOfAnswers.length}
        key={answer.id} />)
      })
      }
    </div>
    <AModal productName={QAqentriesContext.productName} body={body}/>
    </>
  )
}

export default QuestionEntries