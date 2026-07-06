import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'
import ProjectDetail from './components/ProjectDetail'
import Starfield from './components/Starfield'

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

function App() {
  return (
    <>
      <Starfield />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App