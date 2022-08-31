// REACT useContext
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// The Problem
// State should be held by the highest parent component in the stack that requires access to the state.

import {useState} from 'react';

function Unit1() {
    const [user, setUser] = useState("Varun");
    
    return (
        <>
        <h1>{`Hello ${user}!`}</h1>
        <Unit2 user={user} />
        </>
    );
}
function Unit2({user}) {
    return (
        <>
        <h1>Unit 2</h1>
        <Unit3 user={user} />
        </>
    );
}
function Unit3({user}) {
    return (
        <>
        <h1>Unit 3</h1>
        <Unit4 user={user}/>
        </>
    );
}
function Unit4({user}) {
    return (
        <>
        <h1>Unit 4</h1>
        <h2>{`Hey ${user} Again!`}</h2>
        </>
    );
}


// The Solution
// The solution is to create context.


// Create Context
// To create context, you must Import createContext and initialize it:
/* import {useState, createContext} from "react";

const UserContext = createcontext()*/


// Context Provider
// Wrap child components in the Context Provider and supply the state value.
/* function Unit1() {
    const [user, setUser] = useState("Varun");

    return (
        <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Unit2 user={user} />
        </UserContext.Provider>
    );
} */


// Now, all components in this tree will have access to the user Context.

// Use the useContext Hook
// In order to use the Context in a child component, we need to access it using the useContext Hook.
// First, include the useContext in the import statement:

/* import {useState, createContext, useContext } from "react";*/


// Then you can access the user Context in all components:
/* function Unit4() {
    const user = useContext(UserContext);

    return (
        <>
        <h1>Unit4</h1>
        <h2>{`Hey ${user} again!`}</h2>
        </>
    );
} */

/*  */