import { useState } from 'react'
import './App.css'
import Header from "/component/Header.jsx"
import Hero from "/component/hero.jsx"
import Servise from "/component/servise.jsx"
import Sugest from "/component/sugest.jsx"
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
    </div>
    </>
  )
}

export default App
