import React from 'react'
import Listings from './components/Listings'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-3xl">TravelBase</h1>
        <h2 className="text-center text-1xl">Decentralized Travel Experience Platform</h2>
      </header>
      <main>
        <Listings />
      </main>
    </div>
  )
}

export default App
