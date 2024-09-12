import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15
  
  const addValue = () =>{
    if(counter<20){
    setCounter(counter+1)
    }
    else{
      console.log("Value can't exceed 20")
    }

    
  }

  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    }
    else{
      console.log("Value can't go below 0")
    }
  }
  return (
    <>
      <h1>Shubh aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}>Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
