import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Services/>
    <Contact/>
   <Footer/>
    </>
  )
}

export default App
