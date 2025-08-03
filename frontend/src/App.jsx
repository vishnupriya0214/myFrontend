import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mart from './myMart/Mart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mart/>
    </>
  )
}

export default App
