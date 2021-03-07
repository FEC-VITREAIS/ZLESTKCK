import React from 'react'

let AnswerEntries = ({responder, body, date, helpfulCount, images, aCount}) => {
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
        <span className="QAaentries_meta">{date}</span>
        <span className="QAaentries_meta">Mark as Helpful ({helpfulCount})</span>
        <span className="QAaentries_meta">Report</span>
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