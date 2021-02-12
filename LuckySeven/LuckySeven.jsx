import React, { useCallback, useState } from 'react';
import SlotMachine from './SlotMachine';

// ***** 코드 값 정의 *****
export const CODE = {
  0 : '😛',
  1 : '🍁',
  2 : '👅',
  3 : '🚀',
  4 : '🌞',
  5 : '🎵',
  6 : '🖐',
  7 : '7️⃣',
  8 : '💢',
  9 : '🎃',
};

// ***** 함수 정의 *****
export const getCode = () => {
  return ( Math.floor(Math.random()*10) );
};

export const changeIcon = (code) => {
  if (code === 9) {
    return 0
  }
  return code + 1;
}

// ***** 컴포넌트 *****
const LuckySeven = () => {
  const [word, setWord] = useState('Hello, Hooks');
  const [halted, setHalted] = useState(true);
  
  const onClickRedo = useCallback( ()=> {
    setHalted(false);
    console.log(halted);
  },[halted])


  return (
    <>
      <SlotMachine halted={halted}/>
      <SlotMachine halted={halted}/>
      <SlotMachine halted={halted}/>
      <div>{word}</div>
      <button onClick={onClickRedo}>시작</button>
    </>
  );
};

export default LuckySeven;