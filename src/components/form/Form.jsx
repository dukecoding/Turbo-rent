import React, { useState } from 'react'
import './form.css'
export default function Form() {
  const [animationClassName, setAnimationClassName] = useState('')

  let data = {
    name: '',
    email: '',
    message: '',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAnimationClassName('on-submit-animation green')
  }

  return (
    <div className='form-container margin'>
      <h3 id='contact-form'>Contact us or</h3>
      <h2 className='title'>
        🚀 Book your <span className='highlight'>dream ride</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='NAME'
          onChange={(e) => {
            data.name = e.target.value
          }}
        />
        <input
          type='email'
          placeholder='EMAIL'
          onChange={(e) => {
            data.email = e.target.value
          }}
        />
        <textarea
          className='textarea'
          placeholder='MESSAGE'
          cols={25}
          rows={7}
          onChange={(e) => {
            data.message = e.target.value
          }}
        />

        <input
          type='submit'
          value='SEND'
          className={`submit ${animationClassName}`}
        />
      </form>
      <div className='pop-up pop-up-hide'>
        <h2 className='pop-up-message'>Thank you for leaving us a message</h2>
      </div>
    </div>
  )
}
