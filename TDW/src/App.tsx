import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeContainer from './Containers/HomeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeContainer/>
    </>
  )
}

export default App
