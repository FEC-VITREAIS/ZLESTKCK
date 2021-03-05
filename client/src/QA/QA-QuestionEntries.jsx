import React, {useState, useEffect} from 'react'
import ProductContext from '../context.jsx';
import QAstyles from './styles/QAstyles.css'
import AnswerEntries from './QA-AnswerEntries.jsx'
import AModal from './QA-AnswerModal.jsx'

let QuestionEntries = function({body, asker, date, helpfulCount, reported, answers, qCount}) {
  const QAqentriesContext = React.useContext(ProductContext);
  let aCount = answers.length;
  const orderedAnswers =  answers.sort((a, b) => {
    return (a.helpfulness > b.helpfulness) ? -1: 1
  })

  const [arrayOfAnswers, setArrayOfAnswers] = useState(orderedAnswers.slice(0,2))
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showAModal, setShowAModal] = useState(false)

  const aModalClickHandler = (e) => {
    setShowAModal(true)
  }

  const displayedAnswers = (index) => {
      setArrayOfAnswers(orderedAnswers.slice(0, index))
      setDisplayedIndex(index)
  }

  const loadClickHandler = (e) => {
    if (displayedIndex === aCount) {
      displayedAnswers(aCount);
    } else if (displayedIndex >= aCount-2) {
      displayedAnswers(aCount)
      setIsFullyLoaded(true);
    } else {
      displayedAnswers(displayedIndex+2)
    }
  }

  const collapseClickHandler = (e) => {
    displayedAnswers(2)
    setIsFullyLoaded(false)
    setIsCollapsed(true)
  }

  useEffect(() => {
    displayedAnswers(2)
    }, [isCollapsed])

  return (
    <>
    <div className="QAqentries">
      <div className="QAqentries_metaContainer">
        {/* <span className="QAqentries_question">Q:</span> */}
        <span className="QAqentries_meta">From: {asker}</span>
        <span className="QAqentries_meta">{date}</span>
        <span className="QAqentries_meta">Mark as Helpful ({helpfulCount})</span>
        <span className="QAqentries_meta">Report</span>
      </div>
      <div className="QAqentries_questionBody">Q: {body}
      <button className="accordion">V</button>
      <div className="QAqentries_answers">
        1-{displayedIndex} of {aCount} Answers
        <button className="QAqentries_addButton" type="button" onClick={aModalClickHandler}>Add an answer</button>
      </div>
        {arrayOfAnswers.map((answer) => {
          return (<AnswerEntries
          responder={answer.answerer_name}
          body={answer.body}
          date={answer.date}
          helpfulCount={answer.helpfulness}
          images={answer.photos}
          aCount={aCount}
          key={answer.id} />)
        })
        }
        </div>
    </div>

    <div>
      {isFullyLoaded ?
      <div className="QAqentries_collapse">
        <span className="QAqentries_displayCount">Answers 1-{aCount}</span>
        <button className="QAqentries_collapseButton" type="button" onClick={collapseClickHandler}>Collapse answers</button>
      </div>
      :
      <div className="QAqentries_loadMore">
        <span className="QAqentries_displayCount">Answers 1-{displayedIndex} of {aCount}</span>
        <button className="QAqentries_loadButton" type="button" value={displayedIndex} onClick={loadClickHandler}>Load more answers</button>
      </div>
      }
    </div>
    {showAModal ?
    <AModal setShowAModal={setShowAModal} productName={QAqentriesContext.productName} body={body}/>
    : null
    }
    </>
  )
}

export default QuestionEntries