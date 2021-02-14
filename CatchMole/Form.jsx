import React, { useContext, useState, useCallback } from 'react';
import { START_GAME, TableContext, } from './CatchMole';


const Form = () => {
  const {dispatch} = useContext(TableContext);
  const [level, setLevel] = useState('Easy')

  const onClickLeft = useCallback( () =>{
    if (level === 'Hard'){
      setLevel('Normal');
    } else {
      setLevel('Easy');
    }    
  },[level]);
  const onClickRight = useCallback( () =>{
    if (level === 'Easy'){
      setLevel('Normal');
    } else {
      setLevel('Hard');
    }    
  },[level])

  const onClickBtn = useCallback( () => {
    dispatch({type: START_GAME, level})
  },[level])


  return (
    <div className="catchmole-form">
      <div className="level-select">
        <button onClick={onClickLeft}>◀</button>
        <div>{level}</div>
        <button onClick={onClickRight}>▶</button>
      </div>

      <button className="start-button" onClick={onClickBtn}>START</button>
    </div>
  );
};

export default Form;