import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [students, setStudents] = useState([])
  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let [programme, setProgramme] = useState("");


  //Funktion för att lägga till elev i state
  let addStudent = () => {
    
    //Nytt objekt med värden vi sparat i state
    let newStudent = {
      name: name,
      age: age,
      programme: programme
    }
    //Skapa en kopia av array för att ej mutera state
    let newArray = [...students]
    //Lägg till ny elev i array-kopian
    newArray.push(newStudent)
    //Uppdatera state till array-kopian
    setStudents(newArray)

  }

  return(
    <>
      <h1>React med inputs</h1>
      
      <input type="text" placeholder='Namn' onChange={(event) => setName(event.target.value)} />
      <input type="text" placeholder='Ålder' onChange={(event) => setAge(event.target.value)} />

        <select onChange={(event => setProgramme(event.target.value))}>
        <option>Frontend</option>
        <option>Backend</option>
        <option>UX-design</option>
      </select>

      <button onClick={addStudent}>Lägg till</button>

      <h2>List of Students</h2>
      <ul>
        {students.map( student => <li>{student.name} - {student.age} år - {student.programme}</li>)}
      </ul>
    </>

)
}

export default App

