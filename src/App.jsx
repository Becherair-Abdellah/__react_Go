import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Anlyc from './Components/Anlyc'
import Newsletter from './Components/Newsletter'
import Plans from './Components/Plans'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Intro/>
    <Anlyc/>
    <Newsletter/>
    <Plans/>
    <Footer/>
    </>
  )
}

export default App
