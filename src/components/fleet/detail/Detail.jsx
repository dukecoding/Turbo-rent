import React from 'react'
import './detail.css'
import { TbArrowBackUp } from 'react-icons/tb'

export default function Detail({ carData, click }) {
  return (
    <div className='detail-container'>
      <div>
        <button
          className='back-button'
          onClick={() => {
            click({ listView: true, detailView: false, carData: {} })
          }}
        >
          <div className='triangle'></div>
        </button>
        <h3>{carData.text}</h3>
        <p className='car-description'>{carData.description}</p>
        <ul>
          <li> {carData.stats.hp} HP</li>
          <li>{carData.stats.torque} of torque</li>
          <li>{carData.stats.vMax} V-MAX</li>
        </ul>
        <p className='highlight'>Price: {carData.price} per day</p>
      </div>
      <img className='car-image' src={carData.img} alt={carData.text} />
    </div>
  )
}
