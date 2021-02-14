import React, { useContext, useState, useCallback } from 'react';
import { START_GAME, CHANGE_LEVEL, TableContext } from './CatchMole';


const Form = () => {
  // const [level, setLevel] = useState('Easy');
  const {level, dispatch} = useContext(TableContext);

  const onChangeLevel = useCallback( (e) => {
    console.log(e.target.value);
    
    dispatch({ type: CHANGE_LEVEL, level: e.target.value})

  },[]);

  const onClickBtn = useCallback( (e) => {
    dispatch({type: START_GAME})
  },[level])

  return (
    <>
      <label for="Level">LEVEL</label>
      <select id="Level" value={level} onChange = {onChangeLevel} >
        <option value = 'Easy'>Easy</option>
        <option value = 'Normal'>Normal</option>
        <option value = 'Hard'>Hard</option>
      </select>
      <button onClick={onClickBtn}>START</button>
    </>
  );
};

export default Form;