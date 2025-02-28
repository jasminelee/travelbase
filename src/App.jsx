import React from 'react'
import Listings from './components/Listings'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-3xl">Decentralized Travel Experience Platform</h1>
      </header>
      <main>
        <Listings />
      </main>
    </div>
  )
}

export default App
