import React from 'react'
import './App.css'
import {
  Navigation,
  Banner,
  Recommended,
  Footer,
  Introduction,
  Form,
  Fleet,
} from './components'

export default function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Recommended />
      <Introduction />
      <Fleet />
      <Form />
      <Footer />
    </>
  )
}
