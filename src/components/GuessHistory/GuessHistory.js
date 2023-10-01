import React from 'react';
import {range} from "../../utils";
import GuessResults from '../GuessResults/GuessResults';

function GuessHistory({guessList, answer}) {
  

  return (<div className="guess-results">
  {range(6).map((num, index) => <GuessResults key={index} value={guessList[num]} answer={answer}/>)}
  {/* {guessList.map(({guess, id}) => <p className='guess' key={id}>{guess}</p>)} */}
</div>);
}

export default GuessHistory;
