import React, { useState } from 'react'
import './form.css'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hideSubmitButtonClass, setHideSubmitButtonClass] = useState('')
  const [messageShowClass, setMessageShowClass] = useState('pop-up-hide')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '' && email !== '' && message !== '') {
      setHideSubmitButtonClass('hide-submit-button')
      setMessageShowClass('pop-up-show')
      setName('')
      setEmail('')
      setMessage('')
    }
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
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type='email'
          placeholder='EMAIL'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <textarea
          className='textarea'
          placeholder='MESSAGE'
          cols={25}
          rows={7}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />

        <input
          type='submit'
          value='SEND'
          className={`submit ${hideSubmitButtonClass}`}
        />
      </form>
      <div className={`pop-up ${messageShowClass}`} id='pop-up'>
        <h2 className='pop-up-message'>
          ✨ Thank you for leaving us a message ✨
        </h2>
      </div>
    </div>
  )
}
