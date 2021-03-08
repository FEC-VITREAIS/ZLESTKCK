import React, {useState, useEffect} from 'react'
import Fuse from 'fuse.js'

let QASearch = function({questions}) {
  const [query, setQuery] = useState('')

  const options = {
    includesMatches:true,
    minMatchCharLength: 3,
    keys: [
      'question_body',
      'answers.body'
    ]
  }
  const fuse = new Fuse(questions, options);
  const results = fuse.search(query)
  console.log(results)
  const sayHello = () => console.log('ready to search')
  const searchChangeHandler = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    sayHello(), [query]
  })

  return (
    <>
    <div className="QAsearch">
      <input
        type="search"
        className="QAsearch_bar"
        value={query}
        onChange={searchChangeHandler}
        placeholder="Have a question? Search for your answers..."
        size="70">
      </input>
    </div>
    {results ?
        <>
        {results.map((result) => {
          return (
            <div className="QAsearchResults">
              <div><b>Match Found:</b> {result.item.question_body}</div>
            </div>
          )
        })}
        </>
      :
      null
      }
    </>
  )
}

export default QASearch