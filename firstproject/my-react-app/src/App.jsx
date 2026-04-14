import{useState} from'react'
import'./App.css'

function App(){
  const [data,setCount]=useState("hello")
  const [isOn, setIsOn]=useState(false);
  function toggleButton(){
    setIsOn(!isOn)
  }
  function fun(){
    setCount("bye")
  }
  return(
    <>
    <h1>
      State of variable</h1>
      <h2>{data}</h2>
      <button onClick={fun}>Change text</button>
      <h1>toggle Button</h1>
      <h3>Status:{isOn ? "ON":"OFF"}</h3>
      <button onClick={toggleButton}>{isOn ? "Turn OFF" : "Turn ON"}</button></>
  )
}
export default App;