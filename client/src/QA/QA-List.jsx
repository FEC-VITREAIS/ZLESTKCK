import React, {useState, useEffect} from 'react'
import ProductContext from '../context.jsx';
import QuestionEntries from './QA-QuestionEntries.jsx'

let QAList = function({questions}) {
  const [arrayOfQuestions, setArrayOfQuestions] = useState(questions)
  const qCount = questions.length;

  //STATE HOOKS
  const [displayedQuestions, setDisplayedQuestions] = useState(questions.slice(0,4))
  const [displayedQIndex, setDisplayedQIndex] = useState(0)
  const [isQFullyLoaded, setIsQFullyLoaded] = useState(false)

  //DISPLAY HELPER FUNCTION
  const renderQuestions = (index) => {
    setDisplayedQuestions(questions.slice(0, index))
    setDisplayedQIndex(index)
  }

  //CLICK HANDLERS
  const loadQClickHandler = (e) => {
    if (displayedQIndex === qCount) {
      renderQuestions(qCount);
    } else if (displayedQIndex >= qCount-2) {
      renderQuestions(qCount)
      setIsQFullyLoaded(true);
    } else {
      renderQuestions(displayedQIndex+2)
    }
  }

  const hideQClickHandler = (e) => {
    if (displayedQIndex > 4) {
      renderQuestions(displayedQIndex-2);
    }
  }

  const collapseQClickHandler = (e) => {
    renderQuestions(4)
    setIsQFullyLoaded(false)
  }

  //USE EFFECT HOOK
  useEffect(() => {
    renderQuestions(4)
    }, [])

  if (questions.length) {
    return (
      <>
      <div className="QAlist">
        <div className="QAlist_displayCount">Questions 1-{displayedQIndex} of {qCount}</div>
        <input className="QAlist_sortButton" type="button" value="Sort by"></input>
      </div>

      <div className="QAlist_container">
        {displayedQuestions.map((question) => {
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
      <div>
        {isQFullyLoaded ?
          <div className="QAlist_loadMoreQuestions">
            <button type="button" onClick={collapseQClickHandler}>Collapse Questions</button>
          </div>
          :
          <div className="QAlist_loadMoreQuestions">
            <button type="button" onClick={loadQClickHandler}>Show more questions</button>
            <button type="button" onClick={hideQClickHandler}>Show less questions</button>
          </div>
        }
      </div>
      </>
    )
  } else {
    <>
    </>
  }
}

export default QAList