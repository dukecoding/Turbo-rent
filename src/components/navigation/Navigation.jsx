import React, { useEffect, useState } from 'react'
import logo from '../../images/turbo_rent.png'
import './navigation.css'

export default function Navigation() {
  const logoHeight = 180
  const mobileViewWidth = 660
  const [mobile, setMobile] = useState(false)
  const [activeClass, setActiveClass] = useState('')

  useEffect(() => {
    if (window.innerWidth < mobileViewWidth) {
      setMobile(true)
    }
  }, [window.innerWidth])

  function scrollEnable() {
    window.onscroll = () => {}
    document.documentElement.style.scrollBehavior = 'smooth'
  }

  function scrollDisable() {
    let scrollTop = document.documentElement.scrollTop
    let scrollLeft = document.documentElement.scrollLeft
    document.documentElement.style.scrollBehavior = 'auto'
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop)
    }
  }

  function closeMenu() {
    setActiveClass('')
    scrollEnable()
  }

  return (
    <div className='navbar-container'>
      <a href='#' className='logo'>
        <img
          className='logo'
          src={logo}
          height={logoHeight}
          alt='turbo rent'
        ></img>
      </a>
      {!mobile && (
        <nav>
          <li>
            <a className='nav-element' href='#fleet'>
              FLEET
            </a>
          </li>
          <li>
            <a className='nav-element' href='#about-us'>
              ABOUT US
            </a>
          </li>
          <li>
            <a href='#contact-form'>
              <button className='book-a-ride'>BOOK A RIDE</button>
            </a>
          </li>
        </nav>
      )}
      {mobile && (
        <div>
          <div
            onClick={() => {
              setActiveClass('active')

              scrollDisable()
            }}
          >
            <div className='burger-icon'>
              <div className='burger-icon-element-bottom'></div>
              <div className='burger-icon-element-middle'></div>
              <div className='burger-icon-element-top'></div>
            </div>
          </div>
          <div className={`mobile-menu ${activeClass}`}>
            <div
              className='close-menu'
              onClick={() => {
                closeMenu()
              }}
            >
              <div className='close-menu-button'></div>
            </div>
            <div className='rgba-background'>
              <a
                href='#fleet'
                onClick={() => {
                  closeMenu()
                }}
              >
                FLEET
              </a>
              <a
                href='#about-us'
                onClick={() => {
                  closeMenu()
                }}
              >
                ABOUT US
              </a>
              <a
                href='#contact-form'
                onClick={() => {
                  closeMenu()
                }}
              >
                BOOK A RIDE
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
