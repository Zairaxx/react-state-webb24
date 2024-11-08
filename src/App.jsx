import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'

function App() {

  let [darkMode,setDarkMode] = useState(false);
  let [personer, setPersoner] = useState([
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
])

  //State för att spara värden från input
  let [name,setName] = useState("")
  let [lastName,setLastName] = useState("")
  let [age,setAge] = useState("")
  let [hobby,setHobby] = useState("")
  
  const addPerson = () => {
   
    let newPerson = {
      namn:name,
      efternamn:lastName,
      ålder:age,
      hobby:hobby
    } 

    //Lägga in objektet i arrayen
    //Skapar en kopia av vårt personer-state
    let newArray = [...personer]
    //Lägg till ny person
    newArray.push(newPerson);
    //Byt ut gammal array i state mot nya arrayen
    setPersoner(newArray);
  }


  return (
  <div className={!darkMode && "light"}>
    <h1>Övningsuppgift - Profiler</h1>
    {/* Darkmode & Light mode  */}
    <button onClick={() => {setDarkMode(!darkMode)}}>{darkMode ? "Light mode" : "Dark mode"}</button>

    {/* Lägg till nya personer */}
    <div className="form">
      <input type="text" placeholder="Namn" onChange={(event) => setName(event.target.value)} />
      <input type="text" placeholder="Efternamn" onChange={(event) => setLastName(event.target.value) }/>
      <input type="text" placeholder="Ålder" onChange={(event)=> setAge(event.target.value) }/>
      <input type="text" placeholder="Hobby" onChange={(event) => setHobby(event.target.value) }/>
      <button onClick={addPerson}>Add person</button>
  </div>

  {/* Loopar ut alla personer */}
  {personer.map((person) => <Profile data={person} darkMode={darkMode}/>)}
  </div>)
}

export default App

