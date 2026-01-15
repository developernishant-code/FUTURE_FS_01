import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AboutSection from './components/About'
import Skills from './components/Skilssection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-[#171d32]  h-auto w-full overflow-hidden'>
      <div className='max-w-[1480px] mx-auto'>
        <Header />
        <Home />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App