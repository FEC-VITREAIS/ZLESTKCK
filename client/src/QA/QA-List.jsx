import React from 'react'
import ProductContext from '../context.jsx';
import QuestionEntries from './QA-QuestionEntries.jsx'

let QAList = function(props) {

  const QAListContext = React.useContext(ProductContext);
  const qCount = QAListContext.productQA.length;

  return (
    <>
    <div className="QAlist">
      <div className="QAlist_displayCount">Questions 1-4 of {qCount}</div>
      <input className="QAlist_askButton" type="button" value="Ask a question"></input>
      <input className="QAlist_sortButton" type="button" value="Sort by"></input>
    </div>

    <div className="QAlist_container">
      {QAListContext.productQA.map((question) => {
        return (
          <QuestionEntries
            body={question.question_body}
            asker={question.asker_name}
            date={question.question_date}
            helpfulCount={question.question_helpfulness}
            reported={question.reported}
            answers={Object.values(question.answers)}
            qCount={qCount}
            key={question.question_id} />
          )
        }
      )}
    </div>

    <div className="QAlist_loadMoreQuestions">
      <button type="button">Load more questions</button>
    </div>
    </>
  )
}

export default QAList