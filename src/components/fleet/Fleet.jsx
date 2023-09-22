import React, { useState } from 'react'
import Car from './car/Car'
import Detail from './detail/Detail'
import './fleet.css'

import f488 from '../../images/card_488.png'
import r8 from '../../images/card_r8gt.png'
import hurracan from '../../images/card_hurracan.jpeg'
import aventador from '../../images/card_aventador.jpeg'
import gtr from '../../images/card_gtr.jpeg'
import m5cs from '../../images/card_m5cs.png'
import sl63 from '../../images/card_sl63.png'
import a45 from '../../images/card_a45s.jpeg'
import c63 from '../../images/card_c63.jpg'
import carrera4s from '../../images/card_carrera4s.jpeg'
import cayman from '../../images/card_cayman.jpeg'
import mclaren from '../../images/card_mclaren.jpeg'
import rs3 from '../../images/card_rs3.jpeg'
import urus from '../../images/card_urus.jpg'

export default function Fleet() {
  const [display, setDisplay] = useState({
    listView: true,
    detailView: false,
    carData: {},
  })
  const cars = [
    {
      carData: {
        img: hurracan,
        text: 'Lamborghini Hurracan',
        price: '$800',
        description:
          'The Lamborghini Huracan is a powerful and stylish sports car known for its breathtaking performance, stunning design, and exhilarating driving experience.',
        stats: { hp: 680, torque: 490, vMax: '330 km/h' },
      },
    },
    {
      carData: {
        img: f488,
        text: 'Ferrari 488 Spider',
        price: '$800',
        description:
          'The Ferrari 488 is a high-performance supercar that combines jaw-dropping speed, precision handling, and iconic Italian design, delivering an unforgettable driving experience.',
        stats: { hp: 200, torque: 560, vMax: '260 km/h' },
      },
    },
    {
      carData: {
        img: aventador,
        text: 'Lamborghini Aventador',
        price: '$900',
        description:
          'The Lamborghini Aventador is an awe-inspiring supercar that commands attention with its aggressive styling, mind-boggling performance, and thunderous V12 engine, representing the pinnacle of automotive excellence.',
        stats: { hp: 690, torque: 580, vMax: '355 km/h' },
      },
    },
    {
      carData: {
        img: r8,
        text: 'Audi R8 GT',
        price: '$500',
        description:
          "The Audi R8 GT is a sleek and powerful sports car that merges cutting-edge technology, refined elegance, and thrilling performance, offering an extraordinary driving experience that's both exhilarating and luxurious.",
        stats: { hp: 510, torque: 490, vMax: '310 km/h' },
      },
    },
    {
      carData: {
        img: gtr,
        text: 'Mercedes AMG GTR',
        price: '$500',
        description:
          'The AMG GT R is a beastly performance car that showcases German engineering at its finest, combining track-ready agility, raw power, and striking aesthetics to deliver an adrenaline-fueled driving experience like no other.',
        stats: { hp: 650, torque: 650, vMax: '320 km/h' },
      },
    },
    {
      carData: {
        img: m5cs,
        text: 'BMW M5 CS',
        price: '$300',
        description:
          'The BMW M5 CS is a high-performance luxury sedan that blends refined elegance with jaw-dropping power, offering a harmonious balance between everyday comfort and blistering speed, making it the ultimate driving machine for enthusiasts.',
        stats: { hp: 612, torque: 600, vMax: '300 km/h' },
      },
    },
    {
      carData: {
        img: sl63,
        text: 'Mercedes AMG SL63',
        price: '$400',
        description:
          'The AMG SL63 is a dynamic and luxurious convertible that combines top-down driving pleasure with blistering performance, offering a thrilling open-air experience and breathtaking power, all wrapped in an elegant and stylish package.',
        stats: { hp: 580, torque: 600, vMax: '290 km/h' },
      },
    },
    {
      carData: {
        img: a45,
        text: 'Mercedes AMG A45',
        price: '$120',
        description:
          'The AMG A45 is a compact powerhouse that defies its size, boasting exhilarating performance, precise handling, and aggressive styling. With its turbocharged engine and sporty features, it delivers a thrilling driving experience in a compact and practical package.',
        stats: { hp: 420, torque: 450, vMax: '270 km/h' },
      },
    },
    {
      carData: {
        img: c63,
        text: 'Mercedes AMG C63',
        price: '$300',
        description:
          'The AMG C63 is a high-performance luxury sedan that blends elegance with raw power, featuring a potent engine, agile handling, and a refined interior. With its aggressive styling and exhilarating driving dynamics, it delivers an unforgettable experience that embodies the spirit of AMG performance.',
        stats: { hp: 510, torque: 600, vMax: '290 km/h' },
      },
    },
    {
      carData: {
        img: carrera4s,
        text: 'Porshe Carrera 4S',
        price: '$400',
        description:
          "The Carrera 4S is an iconic sports car that combines timeless design, impressive performance, and all-wheel drive capability. With its powerful engine, precise handling, and striking aesthetics, it offers an exhilarating driving experience that captures the essence of Porsche's legendary Carrera lineage.",
        stats: { hp: 450, torque: 560, vMax: '320 km/h' },
      },
    },
    {
      carData: {
        img: cayman,
        text: 'Porshe Cayman GTS',
        price: '$300',
        description:
          "The Porsche Cayman is a compact and sporty coupe that offers thrilling performance, precise handling, and iconic Porsche styling. With its mid-engine configuration and driver-focused design, it delivers an exhilarating driving experience that captures the essence of Porsche's sports car heritage.",
        stats: { hp: 430, torque: 400, vMax: '290 km/h' },
      },
    },
    {
      carData: {
        img: mclaren,
        text: 'McLaren 570s',
        price: '$500',
        description:
          "The McLaren 570S is a striking and high-performance supercar that embodies British engineering excellence. With its sleek design, powerful engine, and precise handling, it delivers an adrenaline-pumping driving experience that showcases McLaren's dedication to speed and performance.",
        stats: { hp: 580, torque: 500, vMax: '310 km/h' },
      },
    },
    {
      carData: {
        img: rs3,
        text: 'Audi RS3',
        price: '$150',
        description:
          'The Audi RS3 is a compact powerhouse that combines sporty styling, dynamic performance, and everyday practicality. With its turbocharged engine, agile handling, and luxurious interior, it offers a thrilling driving experience in a compact package, making it a versatile choice for enthusiasts.',
        stats: { hp: 420, torque: 450, vMax: '270 km/h' },
      },
    },
    {
      carData: {
        img: urus,
        text: 'Lamborghini Urus',
        price: '$450',
        description:
          'The Lamborghini Urus is a bold and powerful SUV that redefines the concept of a high-performance luxury vehicle. With its aggressive design, blistering speed, and exceptional handling, it combines the best of supercar performance and SUV practicality, offering a thrilling driving experience unlike any other.',
        stats: { hp: 610, torque: 590, vMax: '300 km/h' },
      },
    },
  ]

  return (
    <div className='fleet-container margin'>
      <h3 id='fleet'>The cars we love</h3>
      <h2 className='title'>
        🏎️ Fleet of <span className='highlight'>premium</span> vehicles
      </h2>
      {display.listView && (
        <div className='display-container'>
          {cars.map((car) => {
            return <Car carData={car.carData} click={setDisplay} />
          })}
        </div>
      )}
      {display.detailView && (
        <Detail carData={display.carData} click={setDisplay} />
      )}
    </div>
  )
}
