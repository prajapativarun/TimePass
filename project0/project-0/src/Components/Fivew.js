// REACT useRef

// The useRef hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly. 

// Don't cause Re-renders
/* import {useState, useEffect, useRef} from "react";

    function App() {
        const [inputValue, setInputValue] = useState("");
        const count = useRef(0);
        
        useEffect(() => {
            count.current = count.current + 1;
        });

        return(
            <>
            <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />     
            <h1>Render Count: {count.current}</h1>
            </>
        ) ;
    }*/
// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).

// Accessing the DOM Element
// In general, we want to let React handle all DOM manipulation.
// But there are some instances where useRef can be used without causing issues.
// In React, we can add a ref attribute to an element to access it directly in the DOM.
/* import { useRef } from 'react';

    function App() {
        const inputElement = useRef();

        const focusInput = () => {
            inputElement.current.focus();
        };

        return (
            <>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
            </>
        );
    }*/



// Tracking State Changes
// The useRef Hook can also be used to keep track of previous state values.
// This is because we are able to persist useRef values between renders.
/* import { useState, useEffect, useRef } from "react";

function App() {
    const [inputValue, setInputValue ] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return(
        <>
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}*/ 
// This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
// In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.