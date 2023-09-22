import React from 'react'
import './recommended.css'
import f488 from '../../images/card_488.png'
import r8 from '../../images/card_r8gt.png'
import hurracan from '../../images/card_hurracan.jpeg'
import aventador from '../../images/card_aventador.jpeg'
import gtr from '../../images/card_gtr.jpeg'
import m5cs from '../../images/card_m5cs.png'
import sl63 from '../../images/card_sl63.png'

export default function Recommended() {
  const recommendedCars = [
    { model: 'Lamborghini Hurracan Evo', img: hurracan },
    { model: 'Ferrari 488 Spider', img: f488 },
    { model: 'Lamborghini Aventador Roadster', img: aventador },
    { model: 'Audi R8 GT', img: r8 },
    { model: 'Mercedes AMG GTR', img: gtr },
    { model: 'BMW M5 CS', img: m5cs },
    { model: 'Mercedes AMG SL63 Roadster', img: sl63 },
  ]
  return (
    <div className='margin-spacer'>
      <h2>Recommended rentals</h2>
      <div className='recommended-container snap-inline'>
        {recommendedCars.map((car) => {
          return (
            <a href='#fleet'>
              <div className='element'>
                <img src={car.img}></img>
                <p>{car.model}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
