import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import Manual from './Manual'
import GameMatcher from './GameMatcher'

const Games = () => {

  return (

    <HashRouter>
      <div className="link-buttons">
        <Link className="link-button" to="/">MAIN</Link>        
        <Link className="link-button" to="/game/luckyseven">LUCKY SEVEN</Link>        
        <Link className="link-button" to="/game/catchmole">CATCH MOLE</Link>        
        <Link className="link-button" to="/Manual">MANUAL</Link>
      </div>

      <div>
        <Route path="/game/:name" component={GameMatcher}/>
        <Route path="/manual" component={Manual}/>
        <Route exact path="/" component={GameMatcher} />
      </div>
    </HashRouter>
  )
}

export default Games;