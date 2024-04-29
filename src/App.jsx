import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import {
        Signingup,
        Login
       } from './components/index.js'

function App() {
 

  return (
    <>
      {/* <Signingup/>
      <Login/> */}
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
