import React from 'react';
import CatchMole from './CatchMole/CatchMole';
import LuckySeven from './LuckySeven/LuckySeven';

const GameMatcher = ({match}) => {
  if (match.params.name === 'luckyseven'){
    return <LuckySeven />
  } else if (match.params.name === 'catchmole'){
    return <CatchMole />
  }

  return (
    <>
      <div className="main-text">REACTION<br/>SPEED<br/>TEST</div>
    </>
  )
}

export default GameMatcher;