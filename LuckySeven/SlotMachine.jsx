import React, { memo, useEffect, useRef, useState } from 'react';
import { CODE, getCode, changeIcon } from './LuckySeven'

const SlotMachine = memo( ({halted}) => {
  const [code, setCode] = useState(getCode())
  // const [icon, setIcon] = useState(CODE[getIcon()]);
  const timeInterval = useRef();

  useEffect( ()=> {
    console.log('useEffect')
    timeInterval.current = setInterval( ()=>{
      let slotcode = code;
      setCode(changeIcon(slotcode));
      console.log(code)
    },500)

    return () => {
      clearInterval(timeInterval.current);
    }
  },[code])
  return (
    <div className = "machine-cell">{CODE[code]}</div>
  )
});

export default SlotMachine;