import React from 'react'
import Pricing from './components/Pricing'
import "./App.css"

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const App = () => {
  return (
    <>
      <Pricing/>
    </>
  )
}

export default App