import { useState } from 'react'
import Nav from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

function App() {
  const item = Data.map((item) => {
    return (
      <>
        <Card key={item.id} item={item} />
      </>
    )
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="cards-list">{item}</section>
    </div>
  )
}

export default App
