import React, { useState } from "react"
import Input from "./Input/Input"

const App = () => {

  //State for adding in dictionary 
  const [input, setInput] = useState("")
  const [dictionar, setDictionar] = useState([]);
  
  //State for checking if the input word is in the dictionary
  const [checkInput, setCheckInput] = useState("")

  //State for the confirmation message (if the word is in the dictionary or not)
  const [message, setMessage] = useState("")

  const inputHandler = (event) => {
    setInput(event.target.value)
  } 

  const dictionarHandler = (event) => {
    setDictionar(prevDict => {
      return (
        [...prevDict, input]
      )
    })
    setInput("")
    event.preventDefault();
  } 
  
  const checkInputHandler = (event) => {
    setCheckInput(event.target.value)
  }

  const checkDictionarHandler = (event) => {
    setCheckInput(checkInput)
    setCheckInput("")
    //If the input has characters (not only whitespaces)
    if (checkInput.trim().length) {
      if (dictionar.includes(checkInput)){
        setMessage(checkInput + " is in the dictionary ✅")
      } else {
        setMessage(checkInput + " it is not in the dictionary ⛔️")
      }
    }
    event.preventDefault();
  }
  
  return (
    <div>
      <Input onSubmit={dictionarHandler} onChange={inputHandler} boxValue={input} buttonText="Add" placeholder="Add Word To Dictionary"/>
      <Input onSubmit={checkDictionarHandler} onChange={checkInputHandler} message={message} boxValue={checkInput} buttonText="Check" placeholder="Check Word"/>     
    </div>
  )
}

export default App;
