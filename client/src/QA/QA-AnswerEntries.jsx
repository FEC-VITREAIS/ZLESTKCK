import React, {useState} from 'react'

let AnswerEntries = ({responder, body, date, helpfulCount, images, aCount}) => {
  //USE STATE HOOK
  const [markedAHelpful, setMarkedAHelpful] = useState(false)
  const [markedAReported, setMarkedAReported] = useState(false)

  //CLICK HANDLERS
  const toggleAHelpfulClickHandler = (e) => {
    setMarkedAHelpful(!markedAHelpful)
  }

  const toggleAReportedClickHandler = (e) => { // ACTION: Add functionality to hide reported answers
    setMarkedAReported(!markedAReported)
  }

  return (
    <>
    <div className="QAaentries">
      {/* <span className="QAaentries_answer">A:</span> */}
      <div className="QAaentries_metaContainer">
        {responder === 'Seller' ?
        <span className="QAaentries_meta">From: <b>{responder}</b></span>
        :
        <span className="QAaentries_meta">From: {responder}</span>
        }
        <span className="QAaentries_meta">{new Date(date).toLocaleString('default', {month: 'short', day:'numeric', year:'numeric'})}</span>
        {markedAHelpful ?
          <a className="QAaentries_meta" href="javascript:void();" onClick={toggleAHelpfulClickHandler}>Mark as Helpful ({helpfulCount+1})</a>
          :
          <a className="QAaentries_meta" href="javascript:void();" onClick={toggleAHelpfulClickHandler}>Mark as Helpful ({helpfulCount})</a>
        }
        {markedAReported ?
          <a className="QAaentries_meta" href="javascript:void();" onClick={toggleAReportedClickHandler}>Reported</a>
          :
          <a className="QAaentries_meta" href="javascript:void();" onClick={toggleAReportedClickHandler}>Report</a>
        }
      </div>
      <div className="QAaentries_answerBody">A: {body}</div>
      <div className="QAaentries_images">
        {images.map((image) => {
          return (
            <img className="QAaentries_thumbnails" src={image} key={image.length}></img>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default AnswerEntries