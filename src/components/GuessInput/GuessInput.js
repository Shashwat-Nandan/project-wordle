import React from 'react';

function GuessInput({guess, setGuess, handleSubmit}) {
  
  return (
  <form
  className="guess-input-wrapper"
  onSubmit={handleSubmit}
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
</form>);
}

export default GuessInput;
