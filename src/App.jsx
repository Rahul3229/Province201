import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from "./Components/Button"
import Card from "./Components/Card"

import B1 from "./assets/B1.jpg";

import Landing from './Pages/Landing'

import Nav from "./Components/Nav"

import Profile from './Pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Nav />
        {/* <Landing /> */}
      <Profile />
      </div>
    </>
  )
}

export default App
