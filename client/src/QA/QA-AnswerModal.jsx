import React, {useState} from 'react'
import ImageContainer from './QA-ImageContainer'

let AnswerModal = function({arrayOfAnswers, setArrayOfAnswers, setShowAModal, productName, body}) {
  //STATE HOOKS
  const [arrayOfFiles, setArrayOfFiles] = useState([])
  const [newAnswerName, setNewAnswerName] = useState("name")
  const [newAnswerBody, setNewAnswerBody] = useState("body")

  //VARIABLES
  const imgURL = []
  const newAnswerObj = (name, body, photos) => {
    return {
      answerer_name: name,
      body: body,
      date: new Date().toISOString(),
      helpfulness: 0,
      id: Math.floor(Math.random() * 1000000) + 1000000,
      photos: photos
    }
  };

  //CLICK HANDLERS
  const closeAModalClickHandler = (e) => {
    setShowAModal(false);
  }

  const updateAnswerArrayClickHandler = (e) => {
    // console.log('before', answers)
    // console.log(newAnswerObj(newAnswerName, newAnswerBody))
    setArrayOfAnswers(arrayOfAnswers.concat(newAnswerObj(newAnswerName, newAnswerBody, arrayOfFiles)))
    // console.log('after', answers)
  }

  //CHANGE HANDLERS
  const updateAnswererChangeHandler = (e) => {
    setNewAnswerName(e.target.value)
  }

  const updateAnswerBodyChangeHandler = (e) => {
    setNewAnswerBody(e.target.value)
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
          onChange={updateAnswererChangeHandler}
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
          onChange={updateAnswerBodyChangeHandler}
          required>
        </textarea>
      </label>
      <ImageContainer arrayOfFiles={arrayOfFiles} />
      <label className="QAamodal_label">(Option) Upload images
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
          onClick={updateAnswerArrayClickHandler}
          id="answerModalSubmitButton">
            Submit
        </button>
    </div>
  )
}

export default AnswerModal