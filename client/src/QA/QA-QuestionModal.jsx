import React from 'react'

let QuestionModal = function(props) {
  return (
    <div className="QAqmodal">
      <h3 className="QAqmodal_title">Ask Your Question</h3>
      <h5 className="QAqmodal_subtitle">About the PRODUCT NAME</h5>
      <div className="QAqmodal_subscript">* - Indicates a mandatory field</div>
      <label className="QAqmodal_label">Display name*
        <input
          className="QAqmodal_inputField"
          id="questionerDisplayName"
          type="text"
          size="50"
          maxlenght="60"
          placeholder="username123"
          required>
        </input>
      </label>
      <div className="QAqmodal_subscript">For privacy reasons, do not use your full name or email address.</div>
      <label className="QAqmodal_label">Email*
        <input
          className="QAqmodal_inputField"
          id="questionerEmailAddress"
          type="email"
          size="50"
          maxlength="60"
          placeholder="account@email.com"
          required>
        </input>
      </label>
      <div className="QAqmodal_subscript">For authentication reasons, you will not be emailed.</div>
      <label className="QAqmodal_label">Question*
        <textarea
          className="QAqmodal_textareaField"
          id="newQuestionBody"
          rows="10"
          cols="50"
          maxlength="1000"
          minlength="2"
          required>
        </textarea>
      </label>
      <button
        className="QAqmodal_submitButton"
        type="button"
        id="questionModalSubmitButton">
          Submit
      </button>
    </div>
  )
}

export default QuestionModal