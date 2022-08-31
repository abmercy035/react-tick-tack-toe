import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ticktac from './pages/Ticktac'
// import Register from './pages/Register'
// import Dashboard from './pages/Dashboard'
import Header from './components/Header'

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Ticktac />
    </>
  )
}

export default App
