import React, { useState } from 'react';
import SlotMachine from './SlotMachine';

const LuckySeven = () => {
  const [word, setWord] = useState('Hello, Hooks');


  return (
    <>
      <SlotMachine />
      <SlotMachine />
      <SlotMachine />
      <div>{word}</div>
    </>
  );
};

export default LuckySeven;