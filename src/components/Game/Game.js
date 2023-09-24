import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guess, setGuess] = React.useState('')
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault()
        console.log(guess)
        setGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  )
}

export default Game
