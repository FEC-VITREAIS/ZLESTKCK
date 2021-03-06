import React, {useState} from 'react'
import ImageContainer from './QA-ImageContainer'

let AnswerModal = function({arrayOfAnswers, setArrayOfAnswers, setShowAModal, productName, body}) {
  const defaultThumbnail = "https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
  const [arrayOfFiles, setArrayOfFiles] = useState([ defaultThumbnail, defaultThumbnail, defaultThumbnail, defaultThumbnail, defaultThumbnail ])

  const imgURL = []
  const newAnswerObj = (name, body, photos) => {
    return ({
      answerer_name: "",
      body: "",
      date: new Date().toISOString(),
      helpfulness: 0,
      id: Math.floor(Math.random() * 1000000) + 1000000,
      photos: []
    })
  };

  //CLICK HANDLERS
  const closeAModalClickHandler = (e) => {
    setShowAModal(false);
  }

  const updateAnswerArrayClickHandler = (e) => {
    setArrayOfAnswers([...arrayOfAnswers, e.target.value])
  }


  //CREATE ARRAY OF FILES HELPER FUNCTION
  const onInputChanged = (e) => {
    const files = e.currentTarget.files;
    Array.from(files).forEach(file => {
      imgURL.push(URL.createObjectURL(file))
    })
    setArrayOfFiles(imgURL)
  }



  return (
    <div className="QAamodal">
      <input className="closeButton" type="button" value="x" onClick={closeAModalClickHandler}></input>
      <h3 className="QAamodal_title">Submit Your Answer</h3>
      <h5 className="QAamodal_subtitle">{productName} : {body}</h5>
      <div className="QAamodal_subscript">* - Indicates a mandatory field</div>
      <label className="QAamodal_label">Display name*
        <input
          className="QAamodal_inputfield"
          type="text"
          size="50"
          maxlenght="60"
          placeholder="username123"
          required>
        </input>
      </label>
      <div className="QAamodal_subscript">For privacy reasons, do not use your full name or email address.</div>
      <label className="QAamodal_label">Email*
        <input
          className="QAamodal_inputfield"
          type="email"
          size="50"
          maxLength="60"
          placeholder="account@email.com"
          required>
        </input>
      </label>
      <div className="QAamodal_subscript">For authentication reasons, you will not be emailed.</div>
      <label className="QAamodal_label">Answer*
        <textarea
          className="QAamodal_textareaField"
          rows="10"
          cols="50"
          maxLength="1000"
          minLength="2"
          placeholder="Write your answer in here"
          required>
        </textarea>
      </label>
      <ImageContainer arrayOfFiles={arrayOfFiles} defaultThumbnail={defaultThumbnail} />
      <label className="QAamodal_label">Upload images
        <input
          className="QAamodal_uploadButton"
          type="file"
          id="uploadImagesButton"
          accept="image/*,.pdf"
          onChange={onInputChanged}
          multiple>
        </input>
      </label>
        <button
          className="QAamodal_submitButton"
          type="button"
          id="answerModalSubmitButton">
            Submit
        </button>
    </div>
  )
}

export default AnswerModal