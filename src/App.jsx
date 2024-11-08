import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [showSlogan, setShowSlogan] = useState(false);
  return (
    <>
    <h1>React state - Webb24</h1>
    <button onClick={() => setShowSlogan(!showSlogan)}>Toggle slogan</button>

    {/* W(hat) ? T(rue) : F(alse)  - Ternary Conditional Operator*/}
    {/* {showSlogan ? <h2>Anyone can code!</h2> : <h2>Vi har inget motto..</h2>} */}
    {showSlogan && <h2>Anyone can code!</h2>}
    </>
  )
}

export default App


let addTwo = x => x+2