import React from 'react'
import './introduction.css'
import img from '../../images/card_488.png'

export default function Introduction() {
  return (
    <div className='introduction-container margin'>
      <h3 id='about-us'>Turbo Rent</h3>
      <h2 className='title'>👥 Who are we?</h2>
      <p className='introduction-text'>
        <span className='underline'>Discover Turbo Rent</span>, your go-to
        destination for <span className='underline'>high-speed</span> car
        rentals. With over a decade of experience, we've become a{' '}
        <span className='underline'>trusted</span> name in the industry. At
        Turbo Rent, we offer an{' '}
        <span className='underline'>impressive fleet</span> of vehicles to make
        your journeys <span className='underline'>extraordinary</span>. Whether
        you're craving an <span className='underline'>exhilarating</span>{' '}
        adventure or need a <span className='underline'>stylish ride</span> for
        a special occasion, we've got you covered.{' '}
        <span className='underline'>Our commitment</span> to exceptional service
        ensures a <span className='underline'>seamless</span> rental experience
        every time. Get behind the wheel and experience the{' '}
        <span className='underline'>thrill</span> of the road with Turbo Rent.
        Join our <span className='underline'>satisfied customers</span> and
        enjoy the <span className='underline'>speed</span>,{' '}
        <span className='underline'>reliability</span>, and{' '}
        <span className='underline'>convenience</span> that Turbo Rent brings to
        your travel plans.
      </p>
    </div>
  )
}
