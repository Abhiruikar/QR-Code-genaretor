import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrCodGenerator from './Components/QrCodGenerator'
import TicTacToe from './Components/TicTacToe'
import TicTacGame from './Components/TicTacGame'

function App() {

  return (
    <>
    <div>
      {/* <QrCodGenerator/> */}
      {/* <TicTacToe/> */}
      <TicTacGame/>
    
    </div>
    
    </>
  )
}

export default App
