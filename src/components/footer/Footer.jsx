import React from 'react'
import './footer.css'
import logo from '../../images/turbo_rent.png'

export default function Footer() {
  const footerLogoHeight = 120
  return (
    <div className='footer-container'>
      <a href='#'>
        <img src={logo} alt='turbo rent' height={footerLogoHeight} />
      </a>
      <div>
        <ul>
          <li>
            <a href='#fleet'>FLEET</a>
          </li>
          <li>
            <a href='#about-us'>ABOUT US</a>
          </li>
        </ul>
      </div>
      <div>
        <a href='#contact-form'>
          <button className='book-a-ride'>BOOK A RIDE</button>
        </a>
      </div>
    </div>
  )
}
