import React from 'react'

let QuestionModal = function(props) {
  return (
    <div>
      <h3>Ask Your Question</h3>
      <h5>About the PRODUCT NAME</h5>
      <label>Display name*
        <input
          id="questionerDisplayName"
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
          id="questionerEmailAddress"
          type="email"
          size="50"
          maxlength="60"
          placeholder="account@email.com"
          required>
        </input>
      </label>
      <div>For authentication reasons, you will not be emailed.</div>
      <label>Question*
        <textarea
          className="questionModalBody"
          id="newQuestionBody"
          rows="10"
          cols="50"
          maxlength="1000"
          minlength="2"
          required>
        </textarea>
      </label>
      <div>* - Indicates a mandatory field</div>
      <button
        className="questionModalSubmitButton"
        type="button"
        id="questionModalSubmitButton">
          Submit
      </button>
    </div>
  )
}

export default QuestionModal