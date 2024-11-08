import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'

function App() {

  let [darkMode,setDarkMode] = useState(false)

  let personer = [
    {
        namn: "Anna",
        efternamn: "Svensson",
        ålder: 28,
        hobby: "Läsa böcker"
    },
    {
        namn: "Erik",
        efternamn: "Johansson",
        ålder: 35,
        hobby: "Spela gitarr"
    },
    {
        namn: "Maria",
        efternamn: "Karlsson",
        ålder: 22,
        hobby: "Fotografering"
    },
    {
        namn: "Johan",
        efternamn: "Olsson",
        ålder: 40,
        hobby: "Löpning"
    },
    {
        namn: "Linda",
        efternamn: "Andersson",
        ålder: 30,
        hobby: "Resa"
    }
];
  return <div className={!darkMode && "light"}>
  <h1>Övningsuppgift - Profiler</h1>
  <button onClick={() => {setDarkMode(!darkMode)}}>{darkMode ? "Light mode" : "Dark mode"}</button>
{personer.map((person) => <Profile data={person}/>)}
  </div>
}

export default App

