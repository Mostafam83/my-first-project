import { useState } from 'react'
import './App.css'
import Header from "/components/Header.jsx"
import Hero from "/components/hero.jsx"
import Servise from "/components/servise.jsx"
import Sugest from "/components/sugest.jsx"
import PackagesSection from "/components/PackagesSection.jsx"
import Footer from "/components/Footer.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
      <header className='z-50'>
        <Header/>
      </header>
      <main className='z-0'>
        <Hero/>
      </main>
      <div className='z-0'>
        <Servise/>
      </div>
      <div>
        <Sugest/>
      </div>
      <div>
        <PackagesSection/>  
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default App
