import React from 'react'
import ImageContainer from './QA-ImageContainer'

let AnswerModal = function({productName, body}) {
  return (
    <div className="QAamodal">
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
      <ImageContainer />
      <label className="QAamodal_label">Upload images
        <input
          className="QAamodal_uploadButton"
          type="file"
          id="uploadImagesButton"
          accept="image/*,.pdf"
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