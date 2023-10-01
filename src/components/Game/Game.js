import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessHistory from '../GuessHistory/GuessHistory'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmit(event) {
    
    event.preventDefault()
    console.log({guess})
    const newList = [...guessList, {guess, id: Math.random()}];
    setGuessList(newList);
    setGuess('') 
}
  return (
    <>
      <GuessHistory guessList={guessList} />
      <GuessInput guess={guess} setGuess={setGuess} handleSubmit={handleSubmit}/>
    </>
   
  )
}

export default Game
