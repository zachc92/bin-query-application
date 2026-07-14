import { useState } from 'react'
import { InputForm } from './components/InputForm.jsx';
import { OutputDisplay } from './components/OutputDisplay.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputForm />
      <OutputDisplay />
    </>
  )
}

export default App;