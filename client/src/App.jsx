import { useState } from 'react'
import { InputForm } from './components/InputForm.jsx';
import { OutputDisplay } from './components/OutputDisplay.jsx';
import './App.css'

function App() {
  const [binData, setBinData] = useState(null)

  return (
    <div className="dashboard-container">
      <InputForm onResponseReceived={setBinData} />
      <OutputDisplay cardData={binData} />
    </div>
  )
}

export default App;