import React, { useCallback, useRef, useState } from 'react';
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
  const [halted, setHalted] = useState(true);
  const [result, setResult] = useState('');
  const sevenCount = useRef(0);
  const machineCount = useRef(0);

  // ***** 숫자 7의 갯수와 재시작 횟수를 자식으로부터 받아오는 함수 *****
  const getCount = (success, restart) => {
    let successCount = sevenCount.current + success;
    let restartCount = machineCount.current + restart;
    // console.log(`${restartCount} = ${machineCount.current} + ${restart}`)
    sevenCount.current = successCount;
    machineCount.current = restartCount;
    console.log(restartCount);
    if(successCount === 3){
      console.log(`restartCount : ${restartCount} 로 승리`);
      setResult(`${machineCount.current}회 재시도로 성공하셨습니다.`)
      setHalted(true);
    }
  }
  
  const onClickRedo = useCallback( ()=> {
    setHalted(false);
    setResult('');
    sevenCount.current = 0;
    machineCount.current = 0;
  },[halted])


  return (
    <>
      <SlotMachine halted={halted} getCount={getCount}/>
      <SlotMachine halted={halted} getCount={getCount}/>
      <SlotMachine halted={halted} getCount={getCount}/>
      <button onClick={onClickRedo}>시작</button>
      <div>{result}</div>
    </>
  );
};

export default LuckySeven;