import React from 'react'
import ImageContainer from './QA-ImageContainer'

let AnswerModal = function(props) {
  return (
    <div>
      <label>Display name*
        <input
          id="answererDisplayName"
          type="text"
          size="50"
          maxlenght="60"
          placeholder="username123"
          required>
        </input>
      </label>
      <div>For privacy reasons, do not use your full name or email address.</div>
      <label>Email*
        <input
          id="answererEmailAddress"
          type="email"
          size="50"
          maxlength="60"
          placeholder="account@email.com"
          required>
        </input>
      </label>
      <div>For authentication reasons, you will not be emailed.</div>
      <ImageContainer />
      <label>Upload images
        <input
          className="uploadImagesButton"
          type="file"
          id="uploadImagesButton"
          accept="image/*,.pdf"
          multiple>
        </input>
      </label>
      <label>Answer*
        <textarea
          className="AnswerModalBody"
          id="newAnswerBody"
          rows="10"
          cols="50"
          maxlength="1000"
          minlength="2"
          placeholder="Write your answer in here"
          required>
        </textarea>
      </label>
      <div>* - Indicates a mandatory field</div>
      <button
        className="answerModalSubmitButton"
        type="button"
        id="answerModalSubmitButton">
          Submit
      </button>
    </div>
  )
}

export default AnswerModal