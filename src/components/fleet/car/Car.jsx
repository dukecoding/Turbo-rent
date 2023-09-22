import React from 'react'
import './car.css'
export default function List({ carData, click }) {
  return (
    <div
      className='car'
      onClick={() => {
        click({ listView: false, detailView: true, carData: carData })
        window.location.href = '#fleet'
      }}
    >
      <p>{carData.text}</p>
      <img src={carData.img} />
    </div>
  )
}
