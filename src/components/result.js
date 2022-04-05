import React from 'react'

const Result = ({score, playAgain}) => {
  return (
    <div className='score-board'>
        <div className='score'>You scored {score}/5 correct answers</div>
        <button className='playBtn' onClick={playAgain}>PlayAgain</button>
      
    </div>
  )
}

export default Result
