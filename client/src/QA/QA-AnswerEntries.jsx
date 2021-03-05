import React from 'react'

let AnswerEntries = ({responder, body, date, helpfulCount, images, aCount}) => {
  return (
    <>
    <div className="QAaentries">
      {/* <span className="QAaentries_answer">A:</span> */}
      <div className="QAaentries_metaContainer">
        <span className="QAaentries_meta">From: {responder}</span>
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



    {/* <div className="QAaentries_loadMore">
      <span className="QAaentries_displayCount">Answers 1-2 of {aCount}</span>
      <button className="QAaentries_loadButton" type="button">Load more answers</button>
    </div>

    <div className="QAaentries_collapse">
      <span className="QAaentries_displayCount">Answers 1-{aCount}</span>
      <button className="QAaentries_collapseButton" type="button">Collapse answers</button>
    </div> */}
    </>
  )
}

export default AnswerEntries