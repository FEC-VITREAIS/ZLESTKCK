import React, {useState, useEffect} from 'react'
import ProductContext from '../context.jsx';
import QuestionEntries from './QA-QuestionEntries.jsx'

let QAList = function({questions}) {
  const [currentSort, setCurrentSort] = useState('helpful')
  console.log(currentSort)
  const sortingFunction= (array) => {
    if (currentSort === 'helpful') {
      array.sort((a, b) => (a.helpfulness > b.helpfulness) ? -1: 1)
    } else if (currentSort === 'recent') {
      array.sort((a, b) => (a.date > b.date) ? -1: 1)
    } else if (currentSort === 'oldest') {
      console.log(array[0].date)
      array.sort((a, b) => (a.date > b.date) ? 1: -1)
    } else if (currentSort === 'userA') {
      array.sort((a, b) => (a.date > b.date) ? -1: 1)
    } else if (currentSort === 'userZ') {
      array.sort((a, b) => (a.date > b.date) ? 1: -1)
    }
  }

  const [arrayOfQuestions, setArrayOfQuestions] = useState(sortingFunction(questions))
  const qCount = questions.length;

  //STATE HOOKS
  const [displayedQuestions, setDisplayedQuestions] = useState(questions.slice(0,4))
  const [displayedQIndex, setDisplayedQIndex] = useState(0)
  const [isQFullyLoaded, setIsQFullyLoaded] = useState(false)
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)

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

  const dropdownMenuClickHandler = (e) => {
    setShowDropdownMenu(!showDropdownMenu)
  }

  const sortClickHandler = (e) => {
    setCurrentSort(e.target.value)
  }


  //USE EFFECT HOOK
  useEffect(() => {
    renderQuestions(4)
    }, [currentSort])

  if (questions.length) {
    return (
      <>
      <div className="QAlist">
        <div className="QAlist_displayCount">Questions 1-{displayedQIndex} of {qCount}</div>
        {showDropdownMenu ?
          <>
            <div>
              <button className="QAlist_sortButton" type="button" onClick={dropdownMenuClickHandler}>Sort by</button>
              <button className="QAlist_sortLinks" type="button" value="helpful" onClick={sortClickHandler}>Most Helpful</button>
              <button className="QAlist_sortLinks" type="button" value="recent" onClick={sortClickHandler}>Most Recent</button>
              <button className="QAlist_sortLinks" type="button" value="oldest" onClick={sortClickHandler}>Least Recent</button>
              <button className="QAlist_sortLinks" type="button" value="userA" onClick={sortClickHandler}>Username: Ascending</button>
              <button className="QAlist_sortLinks" type="button" value="userZ" onClick={sortClickHandler}>Username: Descending</button>
            </div>
          </>
          :
          <>
          <button className="QAlist_sortButton" type="button" onClick={dropdownMenuClickHandler}>Sort by</button>
          </>
        }
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