// REACT useState
// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
// To use the useState Hook, we first need to import it into our component.
// useState accepts an initial state and returns two values:
   //--     // The current state.
   //--    // A function that updates the state.




// Import useState
// Initialize useState - We initialize our state by calling useState in our function component.
// Read State - We can now include our state anywhere in our component.
// Update State - To update our state, we use our state updater function.



/* Read State
// Use the state variable in the rendered component.

import {useState} from "react";

function FavCol() {
    const [color, setColor] = useState("red");

    return <h1>I like the color {color}!</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);*/



/* Update State
// Use a button to update the state:

import {useState} from "react"

function FavCol() {
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>My fav Color is {color}!</h1>
        <button
        type="button"
        onClick="{() => setColor("blue")}">
        Red
        </button>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);*/



/* What Can State Hold
// Create multiple state Hooks:

import {useState} from "react"

function Car() {
    const [color, setColor] = useState("Red")
    const [brand, setBrand] = useBrand("Ford")
    const [name, setName] = useName("Mustang")
    const [year, setYear] = useYear("1998")

    return (
        <>
        <h1>My {brand}</h1>
        <p>It's a {color} {name} from {year}</p>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);*/



/* Or, we can just use one state and include an object instead!

import {useState} from "react" 

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        name: "Mustang",
        year: "1998",
        color: "Red"
    });

    return(
        <>
        <h1>My {car.brand}</h1>
        <p>It's a {car.color} {car.name} from {car.year}</p>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);*/



/*  Updating Objects and Arrays in State
// When state is updated, the entire state gets overwritten.

import {useState} from "react"

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        name: "Mustang",
        year: "1998",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState =>{
            return {...previousState, color: "Blue"}
        });
    }

    return(
        <>
        <h1>My {car.brand}</h1>
        <p>It's a {car.color} {car.name} from {car.year}</p>
        <button
        type="button"
        onClick="{updateColor}">
        Blue</button>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);*/