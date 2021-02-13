import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import CatchMole from './CatchMole/CatchMole';
import LuckySeven from './LuckySeven/LuckySeven';

const Games = () => {

  return (

    <HashRouter>
      <div>
        <Link to="/luckyseven">럭키세븐</Link>        
        &nbsp;
        <Link to="/catchmole">두더지 잡기</Link>
      </div>

      <div>
        <Route path="/luckyseven" component={LuckySeven}/>
        <Route path="/catchmole" component={CatchMole}/>
      </div>
    </HashRouter>
  )
}

export default Games;