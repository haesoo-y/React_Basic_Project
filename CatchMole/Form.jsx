import React, { useContext, useState, useCallback } from 'react';
import { START_GAME, TableContext } from './CatchMole';


const Form = () => {
  const [level, setLevel] = useState('Easy');
  const {dispatch} = useContext(TableContext);

  const onChangeLevel = useCallback( (e) => {
    console.log(e.target.value);
    
    setLevel(e.target.value);

  },[]);

  const onClickBtn = useCallback( (e) => {
    dispatch({type: START_GAME, level})
  },[level])

  return (
    <>
      <label for="Level">난이도를 선택하세요</label>
      <select id="Level" value={level} onChange = {onChangeLevel} >
        <option value = 'Easy'>Easy</option>
        <option value = 'Normal'>Normal</option>
        <option value = 'Hard'>Hard</option>
      </select>
      <button onClick={onClickBtn}>시작</button>
    </>
  );
};

export default Form;