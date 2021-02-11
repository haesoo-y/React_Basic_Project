import React, { useState, useRef } from 'react';

const CatchMole = () => {
    const [word, setWord] = useState('Hello, Hooks');
    const inputRef = useRef(null);

    // inputRef.current.focus();
    // < ref = {inputRef} >

    return (
        <>
            <h1>{word}</h1>
        </>
    );
};

export default CatchMole;