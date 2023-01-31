import { useState } from 'react'

import './App.css'

import { allInsults } from './insults.jsx'

import Display from './components/Display/Display'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function shuffleArr(arr) {
  return arr.sort(() => 0.5 - Math.random())
}



function App() {

  const [usedInsults, setUsedInsults] = useState([])
  const [insultArr, setInsultArr] = useState(shuffleArr(allInsults))
  const [formInput, setFormInput] = useState({insult: '', play: ''})

  function handleInsultClick() {

    const randomIndex = Math.floor(Math.random() * insultArr.length)
    setUsedInsults([...usedInsults, insultArr[randomIndex]])

    if (insultArr.length > 1) {
      setInsultArr(insultArr.filter(insult => insult !== insultArr[randomIndex]))
    } else {
      setInsultArr(shuffleArr(allInsults))
    }
  }

  function handleInput(event) {
    const target = event.target.id

    if (target === 'insult-input') {
      setFormInput({...formInput, insult: event.target.value})
    } else {
      setFormInput({...formInput, play: event.target.value})
    }

    console.log(insultArr)
  }

  function handleAddInsult() {
    if (formInput.insult.length > 0 && formInput.play.length > 0 && insultArr.indexOf(formInput) === -1) {
      setInsultArr([...insultArr, formInput])
    }
  }

  return (
    <div className="App">
      <Header />
      <Button buttonText='INSULT ME' clickHandler={ handleInsultClick } btnClass='btn--insult' />
      <Display usedInsults={ usedInsults } />
      <Input id='insult-input' inputHandler={ handleInput } placeholderText='Type your custom insult...' />
      <Input id='play-input' inputHandler={ handleInput } placeholderText='Which play is it from?' />
      <Button buttonText='Add insult' clickHandler={ handleAddInsult } btnClass='btn--add' />
    </div>
  )
}

export default App
