import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
