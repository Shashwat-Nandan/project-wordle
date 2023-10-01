import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';



function GuessResults({value, answer}) {
  
  const guessOutcome = value && checkGuess(value.guess, answer);
  
  return  (<p className="guess">
  {range(5).map(num => <span key={num} className={`cell ${guessOutcome ? guessOutcome[num].status : undefined}`}>{value ? value.guess[num] : undefined}</span>) }
 
</p>);
}

export default GuessResults;
