import React, { memo, useEffect, useRef, useState } from 'react';
import { CODE, getCode, changeIcon } from './LuckySeven'

const getTopBottomCode = (tbcode) => {
  switch(tbcode) {
    case -1 : return 9;
    case 10 : return 0;
    default : return tbcode;
  }
}

const SlotMachine = memo( ({halted, getCount}) => {
  const [code, setCode] = useState(getCode());
  const [move, setMove] = useState(false)
  const timeInterval = useRef();
  const timeCode = useRef();

  useEffect( ()=> {
    setMove(true);
    if(halted === true){return}
    timeInterval.current = setInterval( ()=>{
      let slotcode = code;
      setCode(changeIcon(slotcode));
    },300)

    return () => {
      setMove(false);
      clearInterval(timeInterval.current);      
    }
  },[code,halted])

  useEffect( ()=> {
    if(halted === true){
      timeCode.current = setTimeout(()=>{setCode(getCode())},3000);
      return;
    }
    return () => {
      clearTimeout(timeCode.current);
    }
  },[halted])

  const onClickMachine = ()=> {
    if(move){
      clearInterval(timeInterval.current);
      setMove(false);
      if(code === 7){
        getCount(1,0);
      }
    }else {
      setMove(true);
      if(code === 7){
        getCount(-1,0);
      } else{
        // console.log('재시작')
        getCount(0,1);
      }
      timeInterval.current = setInterval( ()=>{
        let slotcode = code;
        setCode(changeIcon(slotcode));
      },500)
    }

    

  }

  return (
    <div className = "machine-cell">
      <div>{CODE[getTopBottomCode(code+1)]}</div>
      <div onClick={onClickMachine}>{CODE[code]}</div>
      <div>{CODE[getTopBottomCode(code-1)]}</div>
    </div>
    
  )
});

export default SlotMachine;