import React from 'react'
import Hero from './Hero'
import About from './About'
import Build from './Build'
import Skills from './Skills'
import Products from './Products'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact from './Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id='about'>
        <About />
      </section>
      <section id='build'>
        <Build />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='products'>
        <Products />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
